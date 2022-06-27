import Layout from "./components/objects/Layout";
import Sidebar from "./components/sections/Sidebar";
import Main from "./components/sections/Main";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Sidebar />

        <Main />
      </Layout>
    </div>
  );
};

export default App;
