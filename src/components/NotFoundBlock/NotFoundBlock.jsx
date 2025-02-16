import styles from '../NotFoundBlock/NotFoundBlock.module.scss';

export function NotFoundBlock() {
    return(
        <h1 className={styles.root}>
            <span>😕</span>
            <br/>
            Ничего не найдено
        </h1>
    )
}