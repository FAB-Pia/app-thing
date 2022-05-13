import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { person, barcode, storefront, cog } from 'ionicons/icons';

import YourAccount from './Feed';
import Scan from './Scan';
import Shop from './Shop';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/account" component={YourAccount} exact={true} />
        <Route path="/tabs/scan" component={Scan} exact={true} />
        <Route path="/tabs/shop" component={Shop} exact={true} />
        <Route path="/tabs/settings" component={Settings} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/feed" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/account">
          <IonIcon icon={person} />
          <IonLabel>Your Account</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/scan">
          <IonIcon icon={barcode} />
          <IonLabel>Scan</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/shop">
          <IonIcon icon={storefront} />
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
