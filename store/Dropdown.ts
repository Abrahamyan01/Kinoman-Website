import { makeAutoObservable } from "mobx";
import { useTranslation } from "react-i18next";



class Dropdown {
    isOpen = false
    isOpenSubscribe = false
    isOpenAlert = false
    isOpenUser = false
    color = "transparent"
    genres = [
        "Артхаус",
        "Биография",
        "Боевики",
        "Вестерн",
        "Военные",
        "Детективы",
        "Для всей семьи",
        "Для детей",
        "Документальные",
        "Драмы",
        "Исторические",
        "Катастрофы",
        "Комедии",
        "Криминальные",
        "Мелодрамы",
        "Мистические",
        "Приключения",
        "Спорт",
        "Триллеры",
        "Ужасы",
        "Фантастика",
        "Фэнтези",
    ]
    countries = [
        "Русские",
        "Зарубежные",
        "Советское кино",
    ]
    dates = [
        "Фильмы 2023 года",
        "Фильмы 2022 года",
        "Фильмы 2021 года",
        "Фильмы 2020 года",
    ]
    features = [
        "Новинки",
        "Подборки",
        "Рейтинг",
        "Трейлеры",
        "Что посмотреть",
        "Фильмы в HD",
        "Выбор КиноМан",
        "Новинки подписки",
    ]
    constructor() {
        makeAutoObservable(this)
    }
    changeHandler(status: boolean) {
        this.isOpen = status
        if (status) this.color = "#1f1b2e"
        else { this.color = "transparent" }
    }
    changeHandlerSubscribe(status: boolean) {
        this.isOpenSubscribe = status
        if (status) this.color = "#1f1b2e"
        else { this.color = "transparent" }
    }
    changeHandlerAlert(status: boolean) {
        this.isOpenAlert = status
        if (status) this.color = "#1f1b2e"
        else { this.color = "transparent" }
    }
    changeHandlerUser(status: boolean) {
        this.isOpenUser = status
        if (status) this.color = "#1f1b2e"
        else { this.color = "transparent" }
    }
}

export default new Dropdown;