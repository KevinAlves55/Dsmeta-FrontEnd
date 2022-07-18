import { Header } from "./components/header/Header";
import { NotificationButton } from "./components/notification-button/NotificationButton";
import { SalesCard } from "./components/sales-card/SalesCard";

export const App = () => {

  return(
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>  
    </>
  );

}