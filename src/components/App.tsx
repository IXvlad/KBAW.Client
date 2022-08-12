import Layout from "@components/layout/Layout";
import IRouteItem from "@routes/models";
import { routes } from "@routes/routes";
import { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

const DefaultComponent: FC<{}> = (): ReactElement => <div>No Component Defined</div>;

function App() {
    return (
        <Layout>
            <div className="main-container">
                <Routes>
                    {routes.map((route: IRouteItem) => (
                        <Route key={`${route.key}`} path={`${route.path}`} element={<route.component /> || <DefaultComponent />} />
                    ))}
                </Routes>
            </div>
        </Layout>
    );
}

export default App;
