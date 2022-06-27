import { useTranslation } from 'react-i18next';

export default function Foo() {

    const { t } = useTranslation();

    return (
        <h1>
            {t("title")}
        </h1>
    )
}