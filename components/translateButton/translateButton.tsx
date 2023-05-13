import React from "react";
import { useTranslation } from "react-i18next";
import { Button, colors } from "@mui/material";

import { translationStore } from "@/store/translationStore";
import { observer } from "mobx-react-lite";

const TranslateButton = observer(() => {

const { t, i18n } = useTranslation();
const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    translationStore.setTranslation(lang)
}
    return (
        <>
            <Button onClick={() => changeLanguage("ru")} sx={{color:'rgba(255,255,255,.48)',marginLeft:'-20px'}}>{t('Рус')}</Button>
            <Button onClick={() => changeLanguage("en")} sx={{color:'rgba(255,255,255,.48)',marginLeft:'-40px'}}>{t('Анг')}</Button>
        </>
    )
})

export default TranslateButton;