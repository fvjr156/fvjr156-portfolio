import styles from "../styles/Footer.module.css";

export default function Footer({ data }) {
    return (
        <footer 
        className={`
            ${styles.footer}
            dark:md:p-15 p-10
            footer-transition
            flex flex-row
            justify-center items-center
            border-t-2 border-t-background md:border-t-accent
            text-footertxt font-display text-sm
            `}
        >
            <div className="">
                {data.copyr}
            </div>
        </footer>
    )
}