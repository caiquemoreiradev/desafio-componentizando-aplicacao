import { Content } from "./Content";
import { SideBar } from "./SideBar";

import '../styles/global.scss';

import '../styles/sidebar.scss';
import '../styles/content.scss';

export function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <SideBar />
            <Content />
        </div>
    )
}