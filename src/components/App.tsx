import Layout from "@components/layout/Layout";
import IRouteItem from "@routes/models";
import { routes } from "@routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

const DefaultComponent: FC<{}> = (): ReactElement => <div>No Component Defined</div>;
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Routes>
                    {routes.map((route: IRouteItem) => (
                        <Route key={`${route.key}`} path={`${route.path}`} element={<route.component /> || <DefaultComponent />} />
                    ))}
                </Routes>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
