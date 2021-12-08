import "./home.css";
import { FeaturedInfo, Chart, WidgetLg, WidgetSm } from "../../index";
import { userData } from "../../../dummyData";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>

            <div className="widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
