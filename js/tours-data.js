window.DRIFT_DATA = {
  "categories": [
    {
      "id": "mountains",
      "title": "Горы"
    },
    {
      "id": "sea",
      "title": "Море"
    },
    {
      "id": "edge",
      "title": "Край света"
    }
  ],
  "tours": [
    {
      "id": "dolomites",
      "category": "mountains",
      "title": "Доломиты",
      "country": "Италия",
      "image": "assets/img/dolomites.webp",
      "imageAlt": "Розовый рассвет над острыми хребтами Доломитов",
      "description": "Розовые скалы, альпийские луга и ночёвки в горных приютах.",
      "details": "Идём от приюта к приюту по тропам вокруг Трёх Зубцов Лаваредо. Багаж едет на машине, вы несёте только рюкзак на день.",
      "highlights": [
        "Три Зубца Лаваредо на рассвете",
        "Ночёвки в приютах с видом на хребет",
        "Завтраки с местным сыром и шпеком"
      ],
      "bestSeason": "июнь — сентябрь",
      "days": 7,
      "price": 1290,
      "coords": {
        "lat": 46.54,
        "lon": 12.14
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "13 июня 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "11 июля 2027",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 90,
              "days": 0
            },
            {
              "id": "d2",
              "label": "5 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -60,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "patagonia",
      "category": "mountains",
      "title": "Патагония",
      "country": "Чили и Аргентина",
      "image": "assets/img/patagonia.webp",
      "imageAlt": "Тёмные гранитные башни Патагонии над озером в лучах заката",
      "description": "Гранитные башни Торрес-дель-Пайне и ледники, до которых можно дойти пешком.",
      "details": "Две недели между озёрами и пиками на юге континента. Треки разной длины: можно выбрать спокойный день у воды вместо восхождения.",
      "highlights": [
        "Башни Торрес на закате",
        "Ледник Перито-Морено с близкого расстояния",
        "Дни без связи и без спешки"
      ],
      "bestSeason": "ноябрь — март",
      "days": 12,
      "price": 2890,
      "coords": {
        "lat": -51.0,
        "lon": -73.1
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "14 ноября 2026",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "9 января 2027",
              "hint": "свободно мест: 2",
              "spots": 2,
              "price": 150,
              "days": 0
            },
            {
              "id": "d2",
              "label": "13 февраля 2027",
              "hint": "свободно мест: 7",
              "spots": 7,
              "price": 60,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "zermatt",
      "category": "mountains",
      "title": "Церматт",
      "country": "Швейцария",
      "image": "assets/img/zermatt.webp",
      "imageAlt": "Заснеженный Маттерхорн под ярким солнцем",
      "description": "Тропа под Маттерхорном, панорамные поезда и озёра-зеркала.",
      "details": "Шесть дней в долине без машин. Ходим короткими тропами, поднимаемся на канатках и возвращаемся в отель к ужину.",
      "highlights": [
        "Маттерхорн в отражении озера Стеллизее",
        "Зубчатый поезд на Горнерграт",
        "Сыр раклет в горной хижине"
      ],
      "bestSeason": "июнь — сентябрь",
      "days": 6,
      "price": 1650,
      "coords": {
        "lat": 46.02,
        "lon": 7.75
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "20 июня 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "18 июля 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 120,
              "days": 0
            },
            {
              "id": "d2",
              "label": "29 августа 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 60,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "tianshan",
      "category": "mountains",
      "title": "Тянь-Шань",
      "country": "Кыргызстан",
      "image": "assets/img/tianshan.webp",
      "imageAlt": "Ледяные вершины Тянь-Шаня над спокойным озером",
      "description": "Озеро Сон-Куль, юрты и лошади: неделя без сигнала сети.",
      "details": "Верхом и пешком поднимаемся к высокогорному озеру, ночуем в юртах у пастухов. Еда на костре, звёзды над головой.",
      "highlights": [
        "Ночёвки в юртах на высоте 3000 м",
        "Конные переходы по джайлоо",
        "Ужин из свежего кумыса и бешбармака"
      ],
      "bestSeason": "июль — сентябрь",
      "days": 9,
      "price": 1190,
      "coords": {
        "lat": 41.83,
        "lon": 75.13
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "4 июля 2027",
              "hint": "свободно мест: 7",
              "spots": 7,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "1 августа 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 60,
              "days": 0
            },
            {
              "id": "d2",
              "label": "5 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -50,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "annapurna",
      "category": "mountains",
      "title": "Аннапурна",
      "country": "Непал",
      "image": "assets/img/annapurna.webp",
      "imageAlt": "Снежная вершина Аннапурны в оранжевом свете рассвета",
      "description": "Классический трек вокруг массива: перевал Торонг-Ла и чайные домики.",
      "details": "Идём по маршруту вокруг массива с акклиматизацией и запасным днём на погоду. Ночуем в чайных домиках у местных семей.",
      "highlights": [
        "Перевал Торонг-Ла на высоте 5416 м",
        "Рассвет над Аннапурной в Пун-Хилл",
        "Горячие источники в Татопани"
      ],
      "bestSeason": "октябрь — ноябрь, март — апрель",
      "days": 14,
      "price": 2190,
      "coords": {
        "lat": 28.6,
        "lon": 83.82
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "10 октября 2026",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "7 ноября 2026",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": -80,
              "days": 0
            },
            {
              "id": "d2",
              "label": "3 апреля 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 60,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "svaneti",
      "category": "mountains",
      "title": "Сванетия",
      "country": "Грузия",
      "image": "assets/img/svaneti.webp",
      "imageAlt": "Туманные зелёные хребты Сванетии в вечернем свете",
      "description": "Каменные башни, ледник Ушба и хачапури в семейных гостевых домах.",
      "details": "Идём от деревни к деревне через перевалы, ночуем у сванских семей. Вечером — длинные столы, домашнее вино и песни.",
      "highlights": [
        "Башни-крепости Ушгули",
        "Ледник Шхара и вид на Ушбу",
        "Семейные ужины в гостевых домах"
      ],
      "bestSeason": "июнь — сентябрь",
      "days": 8,
      "price": 890,
      "coords": {
        "lat": 43.05,
        "lon": 42.73
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "20 июня 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "11 июля 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 40,
              "days": 0
            },
            {
              "id": "d2",
              "label": "12 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -40,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "pyrenees",
      "category": "mountains",
      "title": "Пиренеи",
      "country": "Испания",
      "image": "assets/img/pyrenees.webp",
      "imageAlt": "Зелёные холмы Пиренеев в мягком утреннем свете",
      "description": "Долина Ордеса, водопады и деревни из светлого камня.",
      "details": "Мягкий маршрут по национальному парку: водопады, каньоны и долины, где почти нет туристов. Хорошо подходит для первого похода.",
      "highlights": [
        "Каньон Аньисклое",
        "Водопады цирка Соасо",
        "Обеды в деревнях Арагона"
      ],
      "bestSeason": "июнь — сентябрь",
      "days": 6,
      "price": 980,
      "coords": {
        "lat": 42.65,
        "lon": -0.05
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "6 июня 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "4 июля 2027",
              "hint": "свободно мест: 7",
              "spots": 7,
              "price": 50,
              "days": 0
            },
            {
              "id": "d2",
              "label": "19 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -40,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "nzalps",
      "category": "mountains",
      "title": "Южные Альпы",
      "country": "Новая Зеландия",
      "image": "assets/img/nzalps.webp",
      "imageAlt": "Снежные Южные Альпы над бирюзовым озером",
      "description": "Озёра цвета бирюзы, ледник Фокс и дороги, где овец больше, чем машин.",
      "details": "Две недели на юге Южного острова: короткие треки, ночёвки в кемперах и хижинах, свободные вечера у озёр.",
      "highlights": [
        "Тропа Хукер-Вэлли под горой Кука",
        "Ледник Фокс",
        "Озеро Текапо в зеркальный штиль"
      ],
      "bestSeason": "декабрь — март",
      "days": 14,
      "price": 3490,
      "coords": {
        "lat": -43.59,
        "lon": 170.14
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "6 декабря 2026",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "10 января 2027",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 220,
              "days": 0
            },
            {
              "id": "d2",
              "label": "14 февраля 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 100,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "kilimanjaro",
      "category": "mountains",
      "title": "Килиманджаро",
      "country": "Танзания",
      "image": "assets/img/kilimanjaro.webp",
      "imageAlt": "Заснеженная вершина Килиманджаро над облаками на закате",
      "description": "Подъём по маршруту Ронго с рассветом над облаками.",
      "details": "Маршрут с плавной акклиматизацией: медленный набор высоты, отдельные носильщики и повар. Финальный штурм ночью, рассвет на вершине.",
      "highlights": [
        "Рассвет на пике Ухуру",
        "Ночёвки в палатках над облаками",
        "Сафари на два дня после спуска"
      ],
      "bestSeason": "январь — март, июль — октябрь",
      "days": 9,
      "price": 2390,
      "coords": {
        "lat": -3.07,
        "lon": 37.35
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "9 января 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "13 февраля 2027",
              "hint": "свободно мест: 7",
              "spots": 7,
              "price": -70,
              "days": 0
            },
            {
              "id": "d2",
              "label": "3 июля 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 90,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "huaraz",
      "category": "mountains",
      "title": "Кордильера-Бланка",
      "country": "Перу",
      "image": "assets/img/huaraz.webp",
      "imageAlt": "Заснеженные пики Кордильеры-Бланки над бирюзовым озером",
      "description": "Ледниковые озёра, шеститысячники и трек к лагуне 69.",
      "details": "Десять дней в самом высоком тропическом хребте мира. Первые дни — акклиматизация, затем выход к озёрам и ледникам.",
      "highlights": [
        "Лагуна 69 цвета молока и бирюзы",
        "Пик Уаскаран на рассвете",
        "Ужины с кечуа-семьями"
      ],
      "bestSeason": "июнь — сентябрь",
      "days": 10,
      "price": 1990,
      "coords": {
        "lat": -9.53,
        "lon": -77.53
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "6 июня 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "4 июля 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 80,
              "days": 0
            },
            {
              "id": "d2",
              "label": "1 августа 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 40,
              "days": 0
            }
          ]
        },
        {
          "id": "level",
          "label": "Сложность маршрута",
          "type": "radio",
          "choices": [
            {
              "id": "easy",
              "label": "Лёгкий",
              "hint": "до 12 км в день",
              "price": 0,
              "days": 0
            },
            {
              "id": "medium",
              "label": "Средний",
              "hint": "12–18 км в день",
              "price": 120,
              "days": 0
            },
            {
              "id": "hard",
              "label": "Сложный",
              "hint": "18–24 км, набор до 1 200 м",
              "price": 260,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "guest",
              "label": "Гостевые дома",
              "hint": "двухместные комнаты",
              "price": 0,
              "days": 0
            },
            {
              "id": "hotel",
              "label": "Отели 3–4★",
              "hint": "с завтраком",
              "price": 240,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Горные шале",
              "hint": "с камином и сауной",
              "price": 520,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "porter",
              "label": "Носильщик багажа",
              "hint": "вы несёте только рюкзак на день",
              "price": 150,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "amalfi",
      "category": "sea",
      "title": "Амальфи",
      "country": "Италия",
      "image": "assets/img/amalfi.webp",
      "imageAlt": "Закат над заливом с террасными деревнями побережья Амальфи",
      "description": "Лимонные террасы, лодки между скал и вечера в Позитано.",
      "details": "Неделя на побережье без машины: ходим по «Тропе богов», плаваем на лодке вдоль скал и ужинаем в семейных тратториях.",
      "highlights": [
        "Тропа богов над морем",
        "Лодка вдоль скал до Капри",
        "Паста с лимонами Амальфи"
      ],
      "bestSeason": "май — сентябрь",
      "days": 7,
      "price": 1490,
      "coords": {
        "lat": 40.63,
        "lon": 14.6
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "9 мая 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "6 июня 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 140,
              "days": 0
            },
            {
              "id": "d2",
              "label": "12 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 60,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 480,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 1120,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "santorini",
      "category": "sea",
      "title": "Санторини",
      "country": "Греция",
      "image": "assets/img/santorini.webp",
      "imageAlt": "Белые дома на утёсе над синим морем на закате",
      "description": "Закаты над кальдерой, винодельни на тёмной земле и белые улочки.",
      "details": "Шесть дней на острове без выездов в толпу: рассветы в Имеровильи, дегустации в винодельнях, парусная прогулка по кальдере.",
      "highlights": [
        "Закат из тихой деревни Фира",
        "Дегустация в винодельне на вулканической почве",
        "Парусник вокруг кальдеры"
      ],
      "bestSeason": "май — октябрь",
      "days": 6,
      "price": 1190,
      "coords": {
        "lat": 36.39,
        "lon": 25.46
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "16 мая 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "13 июня 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 160,
              "days": 0
            },
            {
              "id": "d2",
              "label": "26 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 40,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 450,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 1050,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "maldives",
      "category": "sea",
      "title": "Мальдивы",
      "country": "Мальдивы",
      "image": "assets/img/maldives.webp",
      "imageAlt": "Вид сверху на атолл с бирюзовой лагуной и песчаными отмелями",
      "description": "Атолл с бунгало на воде и дайвинг с манта-скатами.",
      "details": "Небольшой остров с домами на воде, дайвингом и снорклингом прямо от бунгало. Без экскурсий по расписанию.",
      "highlights": [
        "Снорклинг с манта-скатами",
        "Бунгало на воде",
        "Ужин на песчаной косе"
      ],
      "bestSeason": "ноябрь — апрель",
      "days": 8,
      "price": 2790,
      "coords": {
        "lat": 4.17,
        "lon": 73.51
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "8 ноября 2026",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "6 декабря 2026",
              "hint": "свободно мест: 2",
              "spots": 2,
              "price": 320,
              "days": 0
            },
            {
              "id": "d2",
              "label": "7 февраля 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 160,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 780,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 1820,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "bali",
      "category": "sea",
      "title": "Бали",
      "country": "Индонезия",
      "image": "assets/img/bali.webp",
      "imageAlt": "Вулкан над рисовыми террасами на рассвете",
      "description": "Вулкан Агунг, рисовые террасы и храмы на рассвете.",
      "details": "Не только пляжи: поднимаемся на рассвете на вулкан, живём в деревне среди рисовых полей и отдыхаем на тихом побережье.",
      "highlights": [
        "Рассвет на вулкане Батур",
        "Террасы Джатилувиха",
        "Три дня на тихом севере острова"
      ],
      "bestSeason": "апрель — октябрь",
      "days": 10,
      "price": 1690,
      "coords": {
        "lat": -8.4,
        "lon": 115.2
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "9 мая 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "13 июня 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 90,
              "days": 0
            },
            {
              "id": "d2",
              "label": "12 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -40,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 390,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 910,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "azores",
      "category": "sea",
      "title": "Азоры",
      "country": "Португалия",
      "image": "assets/img/azores.webp",
      "imageAlt": "Зелёные острова и озёра среди тёмно-синего океана, вид сверху",
      "description": "Кратерные озёра, горячие источники и киты рядом с лодкой.",
      "details": "Остров Сан-Мигел: два дня на тропах вокруг кратеров, день на океане с китами, вечера в термальных бассейнах.",
      "highlights": [
        "Озёра Сете-Сидадеш",
        "Термальные источники Фурнаш",
        "Наблюдение за китами"
      ],
      "bestSeason": "май — октябрь",
      "days": 7,
      "price": 1350,
      "coords": {
        "lat": 37.78,
        "lon": -25.5
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "20 июня 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "18 июля 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 80,
              "days": 0
            },
            {
              "id": "d2",
              "label": "5 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -30,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 420,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 980,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "seychelles",
      "category": "sea",
      "title": "Сейшелы",
      "country": "Сейшелы",
      "image": "assets/img/seychelles.webp",
      "imageAlt": "Бирюзовая лагуна и гранитные острова с высоты",
      "description": "Гранитные валуны, розовый песок и острова, куда попадают только на лодке.",
      "details": "Три острова за восемь дней: Маэ, Праслен и Ла-Диг. Между ними плывём на катамаране и ночуем в небольших гостевых домах.",
      "highlights": [
        "Пляж Анс-Лацио с гранитными валунами",
        "Долина Мэ с пальмами коко-де-мер",
        "Велопрогулки по Ла-Диг"
      ],
      "bestSeason": "октябрь — ноябрь, апрель — май",
      "days": 8,
      "price": 2950,
      "coords": {
        "lat": -4.62,
        "lon": 55.45
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "8 ноября 2026",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "13 декабря 2026",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 260,
              "days": 0
            },
            {
              "id": "d2",
              "label": "7 марта 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 100,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 840,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 1960,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "dalmatia",
      "category": "sea",
      "title": "Далмация",
      "country": "Хорватия",
      "image": "assets/img/dalmatia.webp",
      "imageAlt": "Острова на рассвете над прозрачной морской водой",
      "description": "Яхтенный маршрут между островами Хвар, Вис и Брач.",
      "details": "Неделя на парусной яхте с шкипером: утром плаваем, днём стоим на якоре в бухте, вечером — ужин на берегу в рыбацкой деревне.",
      "highlights": [
        "Ночёвки в закрытых бухтах",
        "Голубая пещера на острове Бишево",
        "Ужины из свежего улова"
      ],
      "bestSeason": "май — сентябрь",
      "days": 7,
      "price": 1090,
      "coords": {
        "lat": 43.17,
        "lon": 16.44
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "30 мая 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "27 июня 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 130,
              "days": 0
            },
            {
              "id": "d2",
              "label": "12 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 30,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 360,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 840,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "palawan",
      "category": "sea",
      "title": "Палаван",
      "country": "Филиппины",
      "image": "assets/img/palawan.webp",
      "imageAlt": "Известняковые острова среди бирюзовой воды, вид с высоты",
      "description": "Лагуны Эль-Нидо, известняковые скалы и коралловые рифы.",
      "details": "Островной маршрут на лодках-банка: каждый день новая лагуна, обед на пустом пляже и снорклинг у рифа.",
      "highlights": [
        "Большая и Малая лагуна",
        "Снорклинг у затонувших кораблей Корона",
        "Обеды на безлюдных пляжах"
      ],
      "bestSeason": "ноябрь — май",
      "days": 10,
      "price": 1890,
      "coords": {
        "lat": 11.18,
        "lon": 119.39
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "7 ноября 2026",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "9 января 2027",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 140,
              "days": 0
            },
            {
              "id": "d2",
              "label": "13 марта 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 40,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 420,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 980,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "madeira",
      "category": "sea",
      "title": "Мадейра",
      "country": "Португалия",
      "image": "assets/img/madeira.webp",
      "imageAlt": "Утёсы Мадейры в дымке над океаном",
      "description": "Тропы вдоль левад, туманные леса и рыбалка на рассвете.",
      "details": "Идём вдоль старых оросительных каналов, поднимаемся к пику Ариэйру и возвращаемся в отель у моря на вечерний ужин.",
      "highlights": [
        "Левада Кальдейран-Верде",
        "Рассвет на пике Ариэйру",
        "Ужин из рыбы эспада"
      ],
      "bestSeason": "апрель — октябрь",
      "days": 7,
      "price": 1250,
      "coords": {
        "lat": 32.65,
        "lon": -16.91
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "9 мая 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "13 июня 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 70,
              "days": 0
            },
            {
              "id": "d2",
              "label": "12 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -30,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 390,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 910,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "zanzibar",
      "category": "sea",
      "title": "Занзибар",
      "country": "Танзания",
      "image": "assets/img/zanzibar.webp",
      "imageAlt": "Парусная лодка дау на фоне рассвета над морем",
      "description": "Плавание на дау под парусом, Каменный город и плантации специй.",
      "details": "Восемь дней на острове: два в Каменном городе, три на побережье и день на парусной лодке к отмелям.",
      "highlights": [
        "Закат на дау под парусом",
        "Экскурсия по плантации специй",
        "Лес красных колобусов Джозани"
      ],
      "bestSeason": "июнь — октябрь, декабрь — февраль",
      "days": 8,
      "price": 1590,
      "coords": {
        "lat": -6.16,
        "lon": 39.19
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "10 октября 2026",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "7 ноября 2026",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": -40,
              "days": 0
            },
            {
              "id": "d2",
              "label": "9 января 2027",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 200,
              "days": 0
            }
          ]
        },
        {
          "id": "stay",
          "label": "Размещение",
          "type": "radio",
          "choices": [
            {
              "id": "apart",
              "label": "Апартаменты",
              "hint": "кухня и балкон",
              "price": 0,
              "days": 0
            },
            {
              "id": "boutique",
              "label": "Бутик-отель",
              "hint": "завтрак и бассейн",
              "price": 320,
              "days": 0
            },
            {
              "id": "villa",
              "label": "Вилла у воды",
              "hint": "собственный выход к морю",
              "price": 780,
              "days": 0
            }
          ]
        },
        {
          "id": "length",
          "label": "Длительность",
          "type": "radio",
          "choices": [
            {
              "id": "base",
              "label": "Как в программе",
              "hint": "без изменений",
              "price": 0,
              "days": 0
            },
            {
              "id": "plus3",
              "label": "+3 дня",
              "hint": "свободные дни у моря",
              "price": 450,
              "days": 3
            },
            {
              "id": "plus7",
              "label": "+7 дней",
              "hint": "полноценный отпуск",
              "price": 1050,
              "days": 7
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка в отель",
              "price": 60,
              "days": 0
            },
            {
              "id": "boat",
              "label": "День на яхте",
              "hint": "с капитаном и обедом",
              "price": 180,
              "days": 0
            },
            {
              "id": "dive",
              "label": "Дайвинг или снорклинг",
              "hint": "с инструктором на 2 погружения",
              "price": 140,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "sahara",
      "category": "edge",
      "title": "Сахара",
      "country": "Марокко",
      "image": "assets/img/sahara.webp",
      "imageAlt": "Золотые дюны Сахары на закате",
      "description": "Ночь в дюнах Мерзуги: верблюды, костёр и звёзды без фонового света.",
      "details": "Из Марракеша едем через Атлас к дюнам Эрг-Шебби. Караван на закате, ночь в лагере и рассвет на гребне дюны.",
      "highlights": [
        "Караван к лагерю на закате",
        "Ночь в бедуинском лагере",
        "Перевал Тизи-н-Тишка"
      ],
      "bestSeason": "октябрь — апрель",
      "days": 6,
      "price": 890,
      "coords": {
        "lat": 31.1,
        "lon": -4.01
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "1 ноября 2026",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "6 декабря 2026",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 60,
              "days": 0
            },
            {
              "id": "d2",
              "label": "7 февраля 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -30,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "wadirum",
      "category": "edge",
      "title": "Вади-Рам",
      "country": "Иордания",
      "image": "assets/img/wadirum.webp",
      "imageAlt": "Красные плато Вади-Рама на закате",
      "description": "Красные каньоны, Петра на рассвете и ночёвки у бедуинов.",
      "details": "От Петры до Вади-Рама: рассвет в древнем городе, джип-сафари по пустыне и ужин, который готовят в земле.",
      "highlights": [
        "Петра до открытия ворот",
        "Джип-сафари по Вади-Раму",
        "Ужин «зарб» в земляной печи"
      ],
      "bestSeason": "октябрь — апрель",
      "days": 6,
      "price": 1050,
      "coords": {
        "lat": 29.57,
        "lon": 35.42
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "1 ноября 2026",
              "hint": "свободно мест: 7",
              "spots": 7,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "7 марта 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 50,
              "days": 0
            },
            {
              "id": "d2",
              "label": "4 апреля 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 0,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "atacama",
      "category": "edge",
      "title": "Атакама",
      "country": "Чили",
      "image": "assets/img/atacama.webp",
      "imageAlt": "Фиолетовые хребты Атакамы в сумерках со звёздами",
      "description": "Самая сухая пустыня планеты: гейзеры, соляные лагуны и небо для астрономов.",
      "details": "Базируемся в Сан-Педро-де-Атакама. Днём — лагуны и гейзеры, ночью — обсерватория с настоящим телескопом.",
      "highlights": [
        "Гейзеры Эль-Татио на рассвете",
        "Лунная долина на закате",
        "Ночь с телескопом"
      ],
      "bestSeason": "весь год",
      "days": 8,
      "price": 2150,
      "coords": {
        "lat": -22.91,
        "lon": -68.2
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "7 ноября 2026",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "13 марта 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 80,
              "days": 0
            },
            {
              "id": "d2",
              "label": "8 мая 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -60,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "namib",
      "category": "edge",
      "title": "Намиб",
      "country": "Намибия",
      "image": "assets/img/namib.webp",
      "imageAlt": "Красные дюны Намиба под синим небом",
      "description": "Красные дюны Соссусфлей, Берег скелетов и ночёвки под Млечным путём.",
      "details": "Десять дней на джипах по одной из старейших пустынь мира. Ночуем в кемпах у дюн и встречаем рассвет на гребне Дюны 45.",
      "highlights": [
        "Дюна 45 на рассвете",
        "Мёртвая долина Дедвлей",
        "Ночь под Млечным путём"
      ],
      "bestSeason": "май — октябрь",
      "days": 10,
      "price": 2690,
      "coords": {
        "lat": -24.73,
        "lon": 15.29
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "11 июля 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "8 августа 2027",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 100,
              "days": 0
            },
            {
              "id": "d2",
              "label": "12 сентября 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 0,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "uyuni",
      "category": "edge",
      "title": "Уюни",
      "country": "Боливия",
      "image": "assets/img/uyuni.webp",
      "imageAlt": "Соляная равнина Уюни с отражением закатного неба",
      "description": "Соляная равнина, которая после дождя превращается в зеркало до горизонта.",
      "details": "Едем на джипах по соляной равнине и вокруг цветных лагун. Ночуем в соляных отелях и в лагерях у вулканов.",
      "highlights": [
        "Зеркало неба на равнине Уюни",
        "Остров Инкауаси с гигантскими кактусами",
        "Лагуна Колорада с фламинго"
      ],
      "bestSeason": "январь — март",
      "days": 7,
      "price": 1890,
      "coords": {
        "lat": -20.13,
        "lon": -67.49
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "9 января 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "13 февраля 2027",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 120,
              "days": 0
            },
            {
              "id": "d2",
              "label": "13 марта 2027",
              "hint": "свободно мест: 7",
              "spots": 7,
              "price": 40,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "iceland",
      "category": "edge",
      "title": "Исландия",
      "country": "Исландия",
      "image": "assets/img/iceland.webp",
      "imageAlt": "Северное сияние над тёмными хребтами и озером",
      "description": "Северное сияние, ледниковые лагуны и горячие источники.",
      "details": "Кольцевая дорога с остановками там, где нет туристических автобусов. Каждый вечер выезжаем ловить сияние в сторону от огней.",
      "highlights": [
        "Ледниковая лагуна Йёкюльсаурлоун",
        "Купание в геотермальных источниках",
        "Охота за северным сиянием"
      ],
      "bestSeason": "сентябрь — март",
      "days": 8,
      "price": 2290,
      "coords": {
        "lat": 64.15,
        "lon": -21.94
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "6 октября 2026",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "10 ноября 2026",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": -60,
              "days": 0
            },
            {
              "id": "d2",
              "label": "9 февраля 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 90,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "lofoten",
      "category": "edge",
      "title": "Лофотены",
      "country": "Норвегия",
      "image": "assets/img/lofoten.webp",
      "imageAlt": "Северное сияние над острыми вершинами Лофотенских островов",
      "description": "Рыбацкие домики у фьорда, пики над морем и сияние из окна.",
      "details": "Живём в рыбацких домиках-рорбу прямо у воды. Днём ходим по тропам и катаемся на каяках, вечером выходим за сиянием.",
      "highlights": [
        "Рорбу на берегу фьорда",
        "Пляж Хауклан ночью",
        "Каякинг между острыми пиками"
      ],
      "bestSeason": "сентябрь — март",
      "days": 7,
      "price": 1990,
      "coords": {
        "lat": 68.23,
        "lon": 14.56
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "5 октября 2026",
              "hint": "свободно мест: 4",
              "spots": 4,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "9 ноября 2026",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": -50,
              "days": 0
            },
            {
              "id": "d2",
              "label": "1 февраля 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 70,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "lapland",
      "category": "edge",
      "title": "Лапландия",
      "country": "Финляндия",
      "image": "assets/img/lapland.webp",
      "imageAlt": "Заснеженный лес Лапландии в розовых сумерках",
      "description": "Стеклянные иглу, хаски-упряжки и ночи, где на небе больше света, чем на земле.",
      "details": "Шесть дней в Саариселькя: собаки, снегоступы, финская сауна и ночёвка в стеклянном иглу с видом на сияние.",
      "highlights": [
        "Ночь в стеклянном иглу",
        "Хаски-сафари на день",
        "Финская сауна после прогулки"
      ],
      "bestSeason": "декабрь — март",
      "days": 6,
      "price": 1690,
      "coords": {
        "lat": 68.41,
        "lon": 27.41
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "1 декабря 2026",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "12 января 2027",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 140,
              "days": 0
            },
            {
              "id": "d2",
              "label": "9 марта 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": -40,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "greenland",
      "category": "edge",
      "title": "Гренландия",
      "country": "Гренландия",
      "image": "assets/img/greenland.webp",
      "imageAlt": "Ледяные хребты Гренландии в мягком закатном свете",
      "description": "Плавание среди айсбергов Илулиссата и ночёвки в деревнях инуитов.",
      "details": "Девять дней у ледяного фьорда: лодка среди айсбергов, треки по тундре и ужины у местных семей.",
      "highlights": [
        "Ледяной фьорд Илулиссат",
        "Ночь у полярного дня",
        "Ужин с местной семьёй"
      ],
      "bestSeason": "июнь — август",
      "days": 9,
      "price": 3190,
      "coords": {
        "lat": 69.22,
        "lon": -51.1
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "6 июня 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "11 июля 2027",
              "hint": "свободно мест: 3",
              "spots": 3,
              "price": 200,
              "days": 0
            },
            {
              "id": "d2",
              "label": "8 августа 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 100,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    },
    {
      "id": "gobi",
      "category": "edge",
      "title": "Гоби",
      "country": "Монголия",
      "image": "assets/img/gobi.webp",
      "imageAlt": "Песчаные дюны и золотистые холмы пустыни Гоби",
      "description": "Поющие дюны Хонгорын-Элс, кочевники и ущелье со льдом до июня.",
      "details": "Десять дней на внедорожниках по пустыне: ночёвки в юртах кочевников, верблюжьи прогулки и ущелье Йолын-Ам.",
      "highlights": [
        "Поющие дюны Хонгорын-Элс",
        "Ущелье Йолын-Ам",
        "Ночёвка в юрте кочевников"
      ],
      "bestSeason": "июнь — сентябрь",
      "days": 10,
      "price": 1790,
      "coords": {
        "lat": 43.77,
        "lon": 102.24
      },
      "options": [
        {
          "id": "date",
          "label": "Дата отправления",
          "type": "radio",
          "choices": [
            {
              "id": "d0",
              "label": "13 июня 2027",
              "hint": "свободно мест: 6",
              "spots": 6,
              "price": 0,
              "days": 0
            },
            {
              "id": "d1",
              "label": "11 июля 2027",
              "hint": "свободно мест: 5",
              "spots": 5,
              "price": 60,
              "days": 0
            },
            {
              "id": "d2",
              "label": "8 августа 2027",
              "hint": "свободно мест: 8",
              "spots": 8,
              "price": 0,
              "days": 0
            }
          ]
        },
        {
          "id": "transport",
          "label": "Транспорт",
          "type": "radio",
          "choices": [
            {
              "id": "group",
              "label": "Внедорожник в группе",
              "hint": "до 4 человек в машине",
              "price": 0,
              "days": 0
            },
            {
              "id": "private",
              "label": "Приватный внедорожник",
              "hint": "только ваша компания",
              "price": 400,
              "days": 0
            }
          ]
        },
        {
          "id": "comfort",
          "label": "Комфорт ночёвок",
          "type": "radio",
          "choices": [
            {
              "id": "camp",
              "label": "Палаточный лагерь",
              "hint": "спальники и душ в лагере",
              "price": 0,
              "days": 0
            },
            {
              "id": "lodge",
              "label": "Лодж",
              "hint": "номер с ванной",
              "price": 290,
              "days": 0
            },
            {
              "id": "luxe",
              "label": "Люкс-кэмп",
              "hint": "кровать, тёплый душ, ужин на закате",
              "price": 650,
              "days": 0
            }
          ]
        },
        {
          "id": "extras",
          "label": "Дополнительно",
          "type": "checkbox",
          "choices": [
            {
              "id": "transfer",
              "label": "Трансфер из аэропорта",
              "hint": "встреча и доставка к старту",
              "price": 60,
              "days": 0
            },
            {
              "id": "insurance",
              "label": "Страховка на весь маршрут",
              "hint": "включая эвакуацию",
              "price": 45,
              "days": 0
            },
            {
              "id": "photo",
              "label": "Фотограф-гид",
              "hint": "съёмка на рассвете и закате",
              "price": 120,
              "days": 0
            }
          ]
        }
      ]
    }
  ]
};
