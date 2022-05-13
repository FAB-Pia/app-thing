import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonIcon,
} from '@ionic/react';
import {notificationsOutline} from "ionicons/icons";
import {useState} from "react";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

const Scan = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const runScanner = () => {
        BarcodeScanner.checkPermission({ force: true }).then(async ({status}) => {
            if (status.granted) {
                // camera permission was granted

                // start scanning
                await BarcodeScanner.hideBackground()

                const result = await BarcodeScanner.startScan()

                if (result.hasContent) {
                    alert(result.content)
                } else {
                    alert('NO DATA FOUND!')
                }
            }
        })
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Scan</IonTitle>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton onClick={() => setShowNotifications(true)}>
                            <IonIcon icon={notificationsOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Scan</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton expand="block"></IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Scan;
