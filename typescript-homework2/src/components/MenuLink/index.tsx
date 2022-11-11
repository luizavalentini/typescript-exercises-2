import styles from './MenuLink.module.css';
import { Link, useLocation } from 'react-router-dom';
interface MenuLink {
    children?: React.ReactNode;
    to?: React.ReactNode;
}
export const MenuLink = ({children, to} : MenuLink) => {
    return (
        <Link className={`
            ${styles.link}
        ${localizacao.pathname === to ? styles.linkSublinhado : ''} `} to={to}>
                    {children}
                </Link>
            )
}
