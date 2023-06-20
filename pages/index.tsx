import Head from "next/head";
import React, { Suspense } from "react";
import { Box, Stack } from "@mui/material";
import MoviesList from "@/components/content/moviesList";
import Subscribe from "@/components/header/Subscribe";
import Hero from "@/components/sections/hero";
import MyTitle from "@/components/content/myTitle";
import { rootStore } from "@/store/RootStore";
import { initializeStore } from "@/store/ssrStore";
import ShowMoreText from "@/components/features/showMoreText";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useContext } from "react";
import { TranslationStoreContext } from "./_app";


export default function Home({ initialMobxState }) {

  const translationstore = useContext(TranslationStoreContext);
  const { t } = useTranslation();

  const text = `<p class="paragraph">Случалось ли вам отказаться от просмотра интересного фильма из-за того, что его показывали в неудобное время? Приходилось ли искать в сети интернет, где смотреть фильмы онлайн? А спорить с домашними из-за выбора кино для просмотра по ТВ?</p>

  <p class="paragraph">Все эти проблемы остались в прошлом! Откройте для себя фильмы онлайн в HD-качестве с кинотеатром Иви. Мы не просто освобождаем вас от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.</p>
  
  <p class="paragraph">Онлайн-кинотеатр Иви – это самая большая коллекция отечественных и зарубежных фильмов в рунете. Наша видеотека насчитывает более 30 тысяч фильмов и видеороликов, доступных для просмотра онлайн, и постоянно пополняется.</p>
  
  <p class="paragraph">Онлайн-кинотеатр ivi.tv – это:</p>
  <ul class="list">
    <li>первый видеосервис в России, который позволяет смотреть фильмы онлайн в хорошем качестве;</li>
    <li>возможность отложить просмотр фильма на время или начать смотреть кино онлайн с любого момента;</li>
    <li>удобный поиск фильмов: по названию, году выпуска, стране производства или жанру;</li>
    <li>фильмы в онлайне, для просмотра которых не требуется устанавливать видеоплееры или искать кодеки;</li>
  </ul>
  <p class="paragraph">Регулярно мы добавляем на сайт самые свежие комедии, лучшие фильмы-приключения, боевики, фильмы ужасов, триллеры и исторические драмы.</p>
  <p class="paragraph">Откройте для себя возможность смотреть фильмы онлайн в отличном качестве с кинотеатром Иви!</p>
  
  <p class="paragraph">Убедитесь в том, что смотреть онлайн – просто и удобно!</p>`;


  const textEn = `
    <p class="paragraph">Have you ever had to refuse to watch an interesting movie because it was shown at an inconvenient time? Have you ever had to search the internet for where to watch movies online? Or argue with your family over which movie to watch on TV?</p>

    <p class="paragraph">All these problems are a thing of the past! Discover online movies in HD quality with the Ivi cinema. We not only free you from the need to go to the cinema or study the TV program - our visitors have many more opportunities.</p>

    <p class="paragraph">The Ivi online cinema is the largest collection of domestic and foreign films on the Runet. Our video library contains more than 30 thousand films and videos available for online viewing and is constantly being updated.</p>

    <p class="paragraph">The ivi.tv online cinema is:</p>
    <ul class="list">
      <li>the first video service in Russia that allows you to watch movies online in good quality;</li>
      <li>the ability to postpone watching a movie for a while or start watching a movie online from any moment;</li>
      <li>convenient search for movies: by title, year of release, country of production or genre;</li>
      <li>online movies that do not require installing video players or searching for codecs;</li>
    </ul>
    <p class="paragraph">We regularly add the freshest comedies, best adventure films, action films, horror films, thrillers and historical dramas to the site.</p>
    <p class="paragraph">Discover the ability to watch movies online in excellent quality with Ivi cinema!</p>

    <p class="paragraph">See for yourself that watching online is easy and convenient!</p>`

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Hero />
          <Subscribe />

          <Box sx={{
            width: "70%",
            mt: "2rem",
            "@media (max-width:599px)": {
              width: "100%",
            }, 
            }}>
            <MyTitle text={t('index-title')} />

            <ShowMoreText
              length={189}
              useDangerouslySetInnerHTML={true}
              buttonText="Развернуть"
              text={translationstore?.currentLanguage === 'ru' ? text : textEn}
              showCollapseButton={true}
            />
          </Box>
          <Stack direction="column" gap={1}></Stack>
          <MoviesList
            movies={initialMobxState.drama.rows}
            title={"Драмы"}
            swiperButtonId="1"
          />
          <MoviesList
            movies={initialMobxState.comedy.rows}
            title={"Комедии"}
            swiperButtonId="2"
          />
        </main>
      </Suspense>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const dramaUrl = `${baseUrl}:3003/info?genres=4&limit=15`;
  const comedyUrl = `${baseUrl}:3003/info?genres=8&limit=15`;

  const [drama, comedy] = await Promise.all([
    fetch(dramaUrl).then((res) => res.json()),
    fetch(comedyUrl).then((res) => res.json()),
  ]);

  const initialData = {
    drama,
    comedy,
  };
  const store = initializeStore(initialData, rootStore);

  const initialMobxState = {
    drama: store.drama,
    comedy: store.comedy,
  };

  return {
    props: {
      initialMobxState,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
      paths: [
        { params: { slug: "/" }, locale: "ru" },
        { params: { slug: "/en" }, locale: "en" },
      ],
    },
  };
}
