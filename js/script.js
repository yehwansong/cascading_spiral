
$(document).ready(function(){

var db = [
    [
        [
            " Though photography is a visual art, I thought that maybe photos could actually portray a world we could not see with the naked eye. Perhaps the spirit or the history of Kitakama - something that we cannot see - the thing that brought this community together, the big picture.  <span class=\"quote\"> LIEKO SHIGA </span>",
            "https://www.tokyoartbeat.com/tablog/entries.en/2008/10/ghosts-in-the-lens.html "
        ],
        [
            "“What can we learn from this kind of seeing of different landscapes? Are the traces we are pursuing to be found outside or inside this sensory system? Are they filled with cultural and cosmic points that activate our human memory when we go for a walk there? Is a magnetic and magic property of a landscape earthy, and are the sensations of our molecular, cell-like perception similar for all living beings within the same environment? How do we see landscape, which guides our way of seeing with its cosmological properties? What scaling, what dynamics of visual representation contain what knowledge? What contemporary history and what social organization of matri-linear society intersect today with the ecological knowledge of the land?”<span class=\"quote\"> ANGELA MELITOPOULOS </span>",
            "https://13thgwangjubiennale.org/participants/ "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/Shadman_Shahid/Shadman_Shahid_No_Quarter_10.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/Shadman_Shahid/Shadman_Shahid_No_Quarter_05.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/Shadman_Shahid/Shadman_Shahid_No_Quarter_12.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/Sarker_Protick/001_Sarker_Elegy_.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/Sarker_Protick/002_Sarker_Elegy_.JPG)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ],
        [
            "“There was something in this land that humans did not want to remember, or humans don’t articulate anymore, but there’s something about how the non-human actually remembers.”<span class=\"quote\">      SIM CHI YIN</span>",
            
        ],
        [
            "“I will go through a variety of processes that end up leading me to a location, and it’s the experiences I have along the way that matter. I think those experiences have a profound connection with the history and societies of those places.”<span class=\"quote\"> LIEKO SHIGA </span>",
            "https://www.tokyoartbeat.com/tablog/entries.en/2008/10/ghosts-in-the-lens.html "
        ]
    ],
    [
        [
            "   “Two curatorial models have been significant for my work, and both converge in a deconstruction of the narratives of Western modernity. One is linked to Disobedience Archive (2005-2014), in which the exhibition was conceived following an archive format and as a criticism of policies that are incapable of integrating forms of life within them. (…) There is another, more recent model that I would call “the geopolitical sphere and Western modernity,” ”  <span class=\"quote\">MARCO SCOTINI, THE DISOBEDIENCE ARCHIVE </span>",
            "https://www.moussemagazine.it/magazine/geopolitical-curating-marco-scotini-carol-yinghua-lu-2020/"
        ],
        [
            "  (Shahidul Alam's) intention was to create and sustain a locus for images and image-makers that would challenge the narrative of Bangladesh — poverty-stricken, flood-riven, aid-dependent — as recounted by the western media. <span class=\"quote\">    PATHSHALA SOUTH ASIAN MEDIA INSTITUTE, SYNTHESIS </span>",
            "https://www.ft.com/content/f2714ba0-8f30-4ed9-8e69-c331851f4698 "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Samsul_Alam_Helal/14_Disappearing_Roots.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Samsul_Alam_Helal/13_Disappearing_Roots.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Samsul_Alam_Helal/19_Disappearing_Roots.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Samsul_Alam_Helal/Under_Water_Chakma_Royal_Palace_dummy_.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ]
    ],
    [
        [
            "“The Microbial Ethnography Lab will allow us to create a collective environment in which such microbial systems can be created by bringing together different points of view, different material systems and interpretations. We are interested in extending the concept of ethnography into the microbial domain by considering the role of the biological systems as they become part of the interpretation (of events) and participate in the preservation, transformation and the remediation of materials inside the vessels.” <span class=\"quote\"> ORKAN TELHAN </span>",
            
        ],
        [
            "“Giving responsibilities away is a platform to share “possibilities.” I compose these possibilities and apply them to contemporary art spaces. I’m interested in what lies between them. Whether post-colonial critique emerges from the exhibition or not, we’re still left with the reality that someone has delegated responsibility to someone else, which is like the empowerment game that society plays.”<span class=\"quote\">     PRATCHAYA PHINTHONG </span>",
            "https://adrastuscollection.org/pratchaya-phinthong-broken-hill/ "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/Salma_Abedin_Prithi/38_Salma_Abedin_Prithi.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/Salma_Abedin_Prithi/26_Salma_Abedin_Prithi.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ]
    ],
    [
        [
            "“Motherhood as an “annex” to women-How do women respond in different ways to their own motherhood experience and how do they stand against motherhood as an identity and as a role? How do their production and reproduction affect each other?”<span class=\"quote\">         ODA PROJESI, ANNE(X)</span>",
            
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Pranabesh_Das/07_Eclipse.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Pranabesh_Das/06_Eclipse.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Pranabesh_Das/02_Eclipse.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/Pranabesh_Das/10_Eclipse.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ],
        [
            "  “I think ‘action’ in photography is something to do with that sense of freshness. My photographs render everything into reality: they are a way of bringing something back to life. You can talk about photographs in terms of ‘shooting’—to ‘shoot’ with a camera like you would shoot with a gun. However, for me, taking photos is not like shooting something: it’s like being shot. I am shot, and the entire timeline of my existence is resurrected in the photograph. So, I think photography is the revival of eternal time and eternal life; a photograph is not a representation of time that has been killed. In such conditions, that means that I myself am firmly embedded in the photograph.” <span class=\"quote\"> LIEKO SHIGA </span>",
            "https://www.tokyoartbeat.com/tablog/entries.en/2008/10/ghosts-in-the-lens.html "
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_4 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/WRNEUS~4.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/WRNEUS~2.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/WRC961~1.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/WR403B~1.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/WR00B2~1.JPG)\"></div><span class=\"quote\">Eva Egermann</span>",
        ],
        [
            "“For us, Java is a geopolitical laboratory that depicts brightly the reality of political identity polarisation that is suspected to be happening massively on a global scale.” <span class=\"quote\">  POETRY CHANNEL A selection of poetry in Turkish will fly around the sphere. Süreyyya and Erdem will prepare them to feed the site.                                           TITA SALINA & IRWAN AHMETT</span>",
            
        ],
        [
            " “The aim of the presentation of a series of counter-exhibitions is to bring back to light the collective memories of rebellious archives, of disobedient bodies, of repressed social roles, of banned books, of removed exhibitions. So one of its main functions can be identified in the rewriting of complex histories, locally interwoven and situated, but never taken on by the univocality of modernity. Or, in other words, such that can restore a reserve of potential that has not been exhausted in history, never definitively completed in it.”<span class=\"quote\">MARCO SCOTINI, THE DISOBEDIENCE ARCHIVE </span>",
            "https://www.moussemagazine.it/magazine/geopolitical-curating-marco-scotini-carol-yinghua-lu-2020/"
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_4 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/IMG_E2262.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/Eva_IMG_0103.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/Eva_IMG_0063.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/Eva_IMG_0047.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/Eva_IMG_0017.JPG)\"></div><span class=\"quote\">Eva Egermann, Hold off, but hold me (Hospitalfood,Waitingroom,Handle, 2011), Central Garden, 2020, courtesy the artist, photo: Eva Egermann,Eva Egermann, Hold off, but hold me (CURE ALL NEUROTYPICALS NOW!, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann,Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, @blutundkaffee (65), Frohmann, 2017; WAGEN ZUM AUSRUHEN, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann,Eva Egermann, Hold off, but hold me (NO ACCESS NO PEACE, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann,Bild: Eva Egermann, Der Fahrende Raum im Rahmen der Cyborg Disco Werkstatt 2018</span>",
            [
                "Eva Egermann, Hold off, but hold me (Hospitalfood,Waitingroom,Handle, 2011), Central Garden, 2020, courtesy the artist, photo: Eva Egermann",
                "Eva Egermann, Hold off, but hold me (CURE ALL NEUROTYPICALS NOW!, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann",
                "Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, @blutundkaffee (65), Frohmann, 2017; WAGEN ZUM AUSRUHEN, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann",
                "Eva Egermann, Hold off, but hold me (NO ACCESS NO PEACE, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann",
                "Bild: Eva Egermann, Der Fahrende Raum im Rahmen der Cyborg Disco Werkstatt 2018"
            ]
        ],
        [
            "“Women and men are the ones who create history but because history is not written by women, they are not mentioned… A special effort is needed to reveal women’s history.”<span class=\"quote\">                                  NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY </span>",
            "https://kathmandupost.com/miscellaneous/2018/10/13/the-public-life-of-women"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/P1080075.jpg)\"></div><span class=\"quote\">Bild: Eva Egermann, Der Fahrende Raum im Rahmen der Cyborg Disco Werkstatt 2018</span>",
            [
                "Bild: Eva Egermann, Der Fahrende Raum im Rahmen der Cyborg Disco Werkstatt 2018"
            ]
        ]
    ],
    [
        [
            "“Reworking images as counterpart to today’s landscape.”<span class=\"quote\"> CATARINA SIMAO </span>",
            "https://fotota.hypotheses.org/7618 "
        ],
        [
            " this radiophonic format is a time zone that fuses generations of changes endured across trans-familial lines spread over immeasurable geographic expanses into a new common world, while, at the same time, avoiding forceful amalgamation. <span class=\"quote\">    CHRISTIAN NYAMPETA </span>",
            "https://medium.com/@camdenartscentre/in-conversation-christian-nyampeta-gina-buenfeld-d32fed700b "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/Eva_IMG_0008.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/Eva_IMG_0002.JPG)\"></div><span class=\"quote\">Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, ich sehe die einsamkeit vor mir und sie ist leicht, hochroth München 2018), 2020, photo: Kunsthalle Wien,Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, 183 Tage, 2015), Kaleidoskop. Fragmente, July 15, 2020, courtesy the artist, photo: Eva Egermann</span>",
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/EJdTwwdw.jpeg)\"></div><span class=\"quote\">Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018</span>",
        ],
        [
            " “As such, the Library operates as a discursive space, in the knowledge that archives are unstable and incomplete, and that archival gaps are not deficiencies, but can create opportunities for dialogue.”<span class=\"quote\">                                  NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY </span>",
            "https://kathmandupost.com/miscellaneous/2018/10/13/the-public-life-of-women"
        ],
        [
            " “Materials and artefacts gain different political agencies during different historical moments in Istanbul.” <span class=\"quote\"> ORKAN TELHAN </span>",
            
        ]
    ],
    [
        [
            " “A history of women, in our opinion, is first and foremost a social history. We have curated this exhibition as a call to contribute to the archive we have started building. We seek and welcome more materials that will help us achieve this mission of a more inclusive history—and future—of Nepal.”<span class=\"quote\">                                  NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY </span>",
            "https://kathmandupost.com/miscellaneous/2018/10/13/the-public-life-of-women"
        ],
        [
            "  “I am earth: a framework coffin prepared in advance, made of cables tied with wire, straightened and folded, lengthened and shortened: guided by principles of harmony and beauty, stretch me out handful by handful, often thrown down from a height, I leap and tug the cable, bite and scream, shape your hands, I become you, a clever creation made of earth, of earth, of earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, eart.h, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, earth, eart.h, earth, earth, earth, earth, from earth destined to return to the earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth earth.” Danarto, Adam the Wisdom of God, 1975, page 28<span class=\"quote\">                 DANARTO DKK</span>",
            "https://drive.google.com/drive/folders/1ULseOn5X730AAkxiqLAcbr2mqi3mh9Qa "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/DSC00676.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/DSC00671.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/DSC00569.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/DSC00544.jpg)\"></div><span class=\"quote\">Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018,Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018,Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018,Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018</span>",
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/DA_IMG_0611.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/DA_A7_02273.jpg)\"></div><span class=\"quote\">Eva Egermann, Hold off, but hold me (with texts by Ianina Ilitcheva) Installation view, Central Garden, 2020, courtesy the artist, photo: Kunsthalle Wien,Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, 183 Tage, 2015), Central Garden, 2020, courtesy the artist, photo: Kunsthalle Wien</span>",
            [
                "Eva Egermann, Hold off, but hold me (with texts by Ianina Ilitcheva) Installation view, Central Garden, 2020, courtesy the artist, photo: Kunsthalle Wien",
                "Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, 183 Tage, 2015), Central Garden, 2020, courtesy the artist, photo: Kunsthalle Wien"
            ]
        ],
        [
            "; something old, like an old name, which then enables (us) to move ahead.  <span class=\"quote\">    CHRISTIAN NYAMPETA </span>",
            "https://medium.com/@camdenartscentre/in-conversation-christian-nyampeta-gina-buenfeld-d32fed700b "
        ],
        [
            "“Photography and cinema had a role to play, especially in military mobilization, counterpropaganda and war diplomacy.”<span class=\"quote\"> CATARINA SIMAO </span>",
            "https://fotota.hypotheses.org/7618 "
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/BA2019~1.JPG)\"></div><span class=\"quote\">Eva Egermann</span>",
        ],
        [
            " found in his work a solid confirmation of their quest for modernisation, an aspect that made plain the anxieties generated by their country’s rapid social and economic transformation.<span class=\"quote\">    ALICE MICELLI                YUTA NAKAMURA, A PROJECT ON BRUNO TAUT</span>",
            "https://built-heritage.springeropen.com/track/pdf/10.1186/BF03545693.pdf "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/PICTURES_AND_CREDIT/Crip_Magazine_2_1.jpg)\"></div><span class=\"quote\">Eva Egermann, Coverdesign of Crip Magazine #2 by Anna Voswinckel</span>",
            [
                "Eva Egermann, Coverdesign of Crip Magazine #2 by Anna Voswinckel"
            ]
        ]
    ],
    [
        [
            "  “Taut in fact often stated that national character should not be pursued as a main goal in design, clear evidence that he himself was not in search for a national style (although others were). Nevertheless, his discourse lent itself to be easily assimilated into the stream of state rhetoric.” <span class=\"quote\">    ALICE MICELLI                YUTA NAKAMURA, A PROJECT ON BRUNO TAUT</span>",
            "https://built-heritage.springeropen.com/track/pdf/10.1186/BF03545693.pdf "
        ],
        [
            " “Watching Shahidul work, often times from a distance and sometimes when lucky, from close proximity, I have come to learn that institution building is not about the edifices we construct and the hardware we amass. Institution building is a slow process of nurturing people, our capacity to be more effective professionals, but also and perhaps more importantly, nurturing our spirit and convictions.” <span class=\"quote\">    PATHSHALA SOUTH ASIAN MEDIA INSTITUTE, SYNTHESIS </span>",
            "https://www.ft.com/content/f2714ba0-8f30-4ed9-8e69-c331851f4698 "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/papaya/IB-GP5.JPG)\"></div><span class=\"quote\">“Sa Digma ng Halimaw\" a play on extrajudicial killings in the Philippines presented during Jejak Tabi Exchange 2020 -- an international platform on contemporary performance that Green Papaya Art Projects co-curated. Photo courtesy of Green Papaya Art Projects.</span>",
            [
                "“Sa Digma ng Halimaw\" a play on extrajudicial killings in the Philippines presented during Jejak Tabi Exchange 2020 -- an international platform on contemporary performance that Green Papaya Art Projects co-curated. Photo courtesy of Green Papaya Art Projects."
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/papaya/IB-GP6.JPG)\"></div><span class=\"quote\">A performance by Elisa Ferrari and Gabi Dao during Kamias Triennial 3 at Green Papaya's space in Quezon City. Photo by Yuji De Torres.</span>",
            [
                "A performance by Elisa Ferrari and Gabi Dao during Kamias Triennial 3 at Green Papaya's space in Quezon City. Photo by Yuji De Torres."
            ]
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/papaya/IB-GP1.png)\"></div><span class=\"quote\">Screenshot of published materials for “Right People, Wrong Timing” (online)</span>",
            [
                "Screenshot of published materials for “Right People, Wrong Timing” (online)"
            ]
        ],
        [
            "“Looking for embodied relations and connections in the making of visual cine(so)matic recordings of field and landscape. How do conditions of memory and knowledge scale view, form a process of storytelling, and how are potential matrilineal connections linking to Earth histories?”<span class=\"quote\"> ANGELA MELITOPOULOS </span>",
            "https://13thgwangjubiennale.org/participants/ "
        ]
    ],
    [
        [
            "“The concepts of gender and sexual difference built on equality, according to the classical model of politics, are no longer useful for understanding contemporary social emancipation. Neither are they no longer sufficient to oppose power relations. What new subjectivities or post-socialist movements are pursuing is the destruction of gender identity, exiting the trap of both worlds (male/female) united into one (heterosexuality). To not assign or be assigned to an identity means to enable the construction and proliferation of possible worlds. Yet, processes of heterogeneous nomadic and evolving subjectivity are opening up on the horizon.” <span class=\"quote\">MARCO SCOTINI, THE DISOBEDIENCE ARCHIVE </span>",
            "https://www.moussemagazine.it/magazine/geopolitical-curating-marco-scotini-carol-yinghua-lu-2020/"
        ],
        [
            " It has that dimension of - I don't want to use a difficult word, but - paleonymic <span class=\"quote\">    CHRISTIAN NYAMPETA </span>",
            "https://medium.com/@camdenartscentre/in-conversation-christian-nyampeta-gina-buenfeld-d32fed700b "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_7 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/7.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_6 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/6.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_5 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/5.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_4 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/4.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/3.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/2.JPG)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/oda/8.JPG)\"></div><span class=\"quote\">ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.,ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.,ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.,ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.,ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.,ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.,ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.,ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.</span>",
            [
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
                "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency."
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/martha/Martha_Atienza_Anito1_Nassauischer_Kunstverein_Wiesbaden_2018_Photo_Janine_Drewes.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/martha/MARTHA_ATIENZA_Anito_1_2012-2015_single-channel_HD_video_9_min_loop_audio.png)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/martha/GOMA_APT9_installationview_20181128_nharth_010.jpg)\"></div><span class=\"quote\">MARTHA ATIENZA Our Islands 11°16’58.4” N 123°45’07.0” E, 2017 Installation image courtesy of QUEENSLAND ART GALLERY |GALLERY OF MODERN ART (QAGOMA),MARTHA ATIENZA Anito 1, 2011-2015 (still) Image courtesy of SILVERLENS,MARTHA ATIENZA Anito 1, 2011-2015 Installation image courtesy of JANINE DREWES, NASSAUISCHER KUNSTVEREIN WIESBADEN</span>",
            [
                "MARTHA ATIENZA Our Islands 11°16’58.4” N 123°45’07.0” E, 2017 Installation image courtesy of QUEENSLAND ART GALLERY |GALLERY OF MODERN ART (QAGOMA)",
                "MARTHA ATIENZA Anito 1, 2011-2015 (still) Image courtesy of SILVERLENS",
                "MARTHA ATIENZA Anito 1, 2011-2015 Installation image courtesy of JANINE DREWES, NASSAUISCHER KUNSTVEREIN WIESBADEN"
            ]
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/martha/MARTHA~1.jpg)\"></div><span class=\"quote\">MARTHA ATIENZA Equation of State II Rhizophora stylosa, 2019 Installation image courtesy of SILVERLENS</span>",
            [
                "MARTHA ATIENZA Equation of State II Rhizophora stylosa, 2019 Installation image courtesy of SILVERLENS"
            ]
        ],
        [
            "“By working with the underlying logic of the Bostans of Istanbul-The Urban cultivation of medicinal plants can be explored as a way of preserving ancient knowledge of the healing properties of medicinal plants.”<span class=\"quote\">     MARIAH LOOKMAN </span>",
            "https://drive.google.com/drive/folders/13tMs_JYRd_ObbJnk8nlDa-DrZEHaozJo "
        ]
    ],
    [
        [
            " “Every time I come into contact with a certain context, there’s the sea as a landmark, or the moon, the sun… I don’t want to make it into an excessively poetic concept, but it is as if they were the main tools, the ingredients. They are the basic kit that you hang on a nail in your studio. “<span class=\"quote\">  RENATO LEOTTA</span>",
            "http://www.in-studio.net/renato-leotta "
        ],
        [
            "  “I imagine the garden to be a place of rest, rejuvenation, respite and affirmation in the basic principles of life that things grow, age and decay.”<span class=\"quote\">     MARIAH LOOKMAN </span>",
            "https://drive.google.com/drive/folders/13tMs_JYRd_ObbJnk8nlDa-DrZEHaozJo "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/martha/Equation_of_State_2019_Installation_View_Courtesy_of_Silverlens_17.jpg)\"></div><span class=\"quote\">www.silverlensgalleries.com info@silverlensgalleries.com 2263 Don Chino Roces Ave Ext, Makati City 1231, Philippines T & F +63 2 8816 0044 | M +63917 587 4011 MARTHA ATIENZA Equation of State II Rhizophora stylosa, 2019 Installation image courtesy of SILVERLENS</span>",
            [
                "www.silverlensgalleries.com info@silverlensgalleries.com 2263 Don Chino Roces Ave Ext, Makati City 1231, Philippines T & F +63 2 8816 0044 | M +63917 587 4011 MARTHA ATIENZA Equation of State II Rhizophora stylosa, 2019 Installation image courtesy of SILVERLENS"
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/martha/edwin_mask.jpg)\"></div><span class=\"quote\">Gilubong Ang Akong Pusod SaDagat (My Navel is Buried in the Sea), 2011 (still) Image courtesy of SILVERLENS</span>",
            [
                "Gilubong Ang Akong Pusod SaDagat (My Navel is Buried in the Sea), 2011 (still) Image courtesy of SILVERLENS"
            ]
        ],
        [
            "“And then it was over. The waves settled, the wind took the falling sky elsewhere, and we each one of us re-entered our separateness; phones came out of pockets, babies started to cry, people laughed.” <span class=\"quote\">        CHARLES LIM & SIMRYN GILL</span>",
            
        ],
        [
            " I myself remember lots of radio moments! One of them indeed occurred during the height of the misery in Rwanda, when I chose to listen to BBC World Service on short waves. It offered this super distant and otherworldly voice that somehow made life bearable by keeping me from being pulled into the depths of despair, lassitude and euphoria. Radio has this way of connecting isolations; it allows cultural works to travel and circulate.” <span class=\"quote\">    CHRISTIAN NYAMPETA </span>",
            "https://medium.com/@camdenartscentre/in-conversation-christian-nyampeta-gina-buenfeld-d32fed700b "
        ]
    ],
    [
        [
            ", Green Papaya is investing in possible futures. <span class=\"quote\">                GREEN PAPAYA</span>",
            "https://aaa.org.hk/en/ideas/ideas/green-papaya-art-projects-why-artist-run-spaces "
        ],
        [
            " “This is actually a Rwandan proverb. <span class=\"quote\">    CHRISTIAN NYAMPETA </span>",
            "https://medium.com/@camdenartscentre/in-conversation-christian-nyampeta-gina-buenfeld-d32fed700b "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/martha/003marthaatienza.jpg)\"></div><span class=\"quote\">MARTHA ATIENZA Panangatan 11°09’53.3”N 123°42’40.5”E 2019-10-24 Thu 6:42 AM PST 1.29 meters High Tide 2019-10-12 Sat 10:26 AM PST 1.40 meters High Tide, 2019 (still) Image courtesy of SILVERLENS</span>",
            [
                "MARTHA ATIENZA Panangatan 11°09’53.3”N 123°42’40.5”E 2019-10-24 Thu 6:42 AM PST 1.29 meters High Tide 2019-10-12 Sat 10:26 AM PST 1.40 meters High Tide, 2019 (still) Image courtesy of SILVERLENS"
            ]
        ]
    ],
    [
        [
            "“The idea of claiming place in public life was one of the most significant themes that emerged from the materials we collected. The distinctions between the private and the public have a complex history in Nepal, as elsewhere, but these concepts are also repeatedly mobilised by women in the narratives about their own lives—describing their moves from one sphere to the other as a major transition or a breaking of barriers that held them back.”<span class=\"quote\">                                  NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY </span>",
            "https://kathmandupost.com/miscellaneous/2018/10/13/the-public-life-of-women"
        ],
        [
            " Maybe the most important thing is learning what listening is about, and breaking lots of clichés I had, and a lot of people around me had on what the act of listening is. For me now, the act of listening is multiple collaborations which became an act that involved all the senses - and that mirrors a bit what I was telling you about my interest in Marfa, coming here and feeling the wind, seeing the landscape and hearing the sounds. For me, the act of listening became this: mobilising all the senses towards understanding what is the sound we're trying to catch? And not closing the eyes and focusing on the sound while trying to channel it through the ears. For me now, this total act is tactile, is physical, is visual, is multi-sensorial in many ways.” <span class=\"quote\">    TAREK ATOUI, I/E ISTANBUL </span>",
            "https://www.ibraaz.org/interviews/130 "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/martha/2_MART~1.jpg)\"></div><span class=\"quote\">MARTHA ATIENZA Our Islands 11°16’58.4” N 123°45’07.0” E, 2017 (still) Image courtesy of SILVERLENS</span>",
            [
                "MARTHA ATIENZA Our Islands 11°16’58.4” N 123°45’07.0” E, 2017 (still) Image courtesy of SILVERLENS"
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_7 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WRF3E3~1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_6 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WRE480~1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_5 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WR860D~1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_4 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WR542D~1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WR55E6~1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WR20DD~1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WR9F4C~1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_7\" style = \"background-image:url(img/ib_image_batch/WR3AB4~1.jpg)\"></div><span class=\"quote\">Eva Egermann</span>",
        ],
        [
            "  “How can we take political action where “unintended consequences” open up a messy reality in which it is difficult to connect a crime to its location? Was it even a crime? In contemporary times these are political questions for forensic architecture, as human lives and the planet’s ecosystem are at stake. The problems posed by the toxic Victorian house are now the most urgent questions that have shaped and continue to shape our relation to the planet.” <span class=\"quote\">       INTERPRT, BLUE PERIL</span>",
            "https://www.youtube.com/watch?v=NKREFr_Wtc4 "
        ],
        [
            "“In that brief time it is as if we converged: the boat with its human load , the water, the damp air, the low clouds, the filtered light. Everything within the realm of the weather- event became indivisible. All boundaries opening into a single porous whole.”<span class=\"quote\">        CHARLES LIM & SIMRYN GILL</span>",
            
        ]
    ],
    [
        [
            "“...the role of the curator in facilitating an ecology of practices between various disciplines”<span class=\"quote\">       INTERPRT, BLUE PERIL</span>",
            "https://www.youtube.com/watch?v=NKREFr_Wtc4 "
        ],
        [
            "“My mode of artistic production is to continually refer back to areas of interest and it is possible to select and group works from different dates, even different decades, that can be put under one heading or another. “<span class=\"quote\">      GÜLSÜN KARAMUSTAFA </span>",
            "https://blog.saltonline.org/post/95367715734/the-bold-and-poignant-palette-of-gulsun-karamustafa "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/WR1F4C~1.jpg)\"></div><span class=\"quote\">Eva Egermann</span>",
        ]
    ],
    [
        [
            " “The ways in which societies approach the ‘ocean’ is an expression of the value given to life itself. Through utilizing sound and other sensory mediums, Havini asks the audience to reconsider evolution. In deep-time listening, a continuum is created. The sound and the experience embodies Ocean Space through sequences created by the artist, but it remains within the visitors, evolving and as a physically embodied memory.” <span class=\"quote\">           TALOI HAVINI </span>",
            "https://www.youtube.com/watch?v=M6yoT-CXey4  (0:34-0:57)"
        ],
        [
            " Artists are no longer there to reflect history or what is happening in the country, but to be active participants in political actions.” <span class=\"quote\">                GREEN PAPAYA</span>",
            "https://aaa.org.hk/en/ideas/ideas/green-papaya-art-projects-why-artist-run-spaces "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/Rubiela2_2.1.1.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/Rubiela_cu2_1.53.3.jpg)\"></div><span class=\"quote\">URSULA BIEMANN</span>",
            [
                "URSULA BIEMANN"
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/Microphones_in_shallow_waters_-_copie.jpg)\"></div><span class=\"quote\">name</span>",
            [
                "name"
            ]
        ],
        [
            " “Collection remains a large aspect of what I do. I mean, I'm more interested in how certain things get to be where they are, and the narratives behind them - so I'm interested not necessarily in the object itself, but the story behind that.”   <span class=\"quote\">  NEWELL HARRY </span>",
            "https://www.youtube.com/watch?v=GOkj7-gWPJo (1:58-2:18)"
        ],
        [
            "  “I should also stress that I identify more as a collector than artist: someone, who gathers, compiles, arranges, or reorganises relationships between things that often already exist in the world.” <span class=\"quote\">  NEWELL HARRY </span>",
            "https://www.youtube.com/watch?v=GOkj7-gWPJo (1:58-2:18)"
        ]
    ],
    [
        [
            " “I think the role of artists and cultural workers has changed dramatically over the years. <span class=\"quote\">                GREEN PAPAYA</span>",
            "https://aaa.org.hk/en/ideas/ideas/green-papaya-art-projects-why-artist-run-spaces "
        ],
        [
            "“When I use language, I'm aware of the materiality of it. It has to translate into something texturally, in material - so that with the mats, they're really a quite literal means of interweaving the language within the concept.”<span class=\"quote\">  NEWELL HARRY </span>",
            "https://www.youtube.com/watch?v=GOkj7-gWPJo (1:58-2:18)"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/IB-GP2.png)\"></div><span class=\"quote\">URSULA BIEMANN</span>",
            [
                "URSULA BIEMANN"
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/Hernando3_1.9.1.jpg)\"></div><span class=\"quote\">URSULA BIEMANN</span>",
            [
                "URSULA BIEMANN"
            ]
        ],
        [
            " “I think research is collaborative, so it's all these intersecting ideas of what research is; how science and art come together. It's this whole community of experiences that will feed in, I think, to my work.”  <span class=\"quote\">           TALOI HAVINI </span>",
            "https://www.youtube.com/watch?v=M6yoT-CXey4  (0:34-0:57)"
        ],
        [
            "   ...My relationship to the ocean is one of love and care. Even before being an artist, I'm an indigenous landowner, and with that comes an enormous respect and care - but also a concern for our oceans at the moment. <span class=\"quote\">           TALOI HAVINI </span>",
            "https://www.youtube.com/watch?v=M6yoT-CXey4  (0:34-0:57)"
        ]
    ],
    [
        [
            " “In all mediums, her practice perpetuates the desires for Indigenous Knowledge Systems to undermine the persistent colonial structures that aimed to annihilate them. She delves deeply into themes of representation, inheritance, habitats, and epistemologies of Oceania.” <span class=\"quote\">           TALOI HAVINI </span>",
            "https://www.youtube.com/watch?v=M6yoT-CXey4  (0:34-0:57)"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/Drone2_1.14.2.jpg)\"></div><span class=\"quote\">URSULA BIEMANN</span>",
            [
                "URSULA BIEMANN"
            ]
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/EducationalStudies02_052_OMP3451.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/EducationalStudies02_047_OMP3493.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/EducationalStudies02_023_OMP3236.jpg)\"></div><span class=\"quote\">URSULA BIEMANN</span>",
            [
                "URSULA BIEMANN"
            ]
        ]
    ],
    [
        [
            "“The growth and relocalisation involves also forms of food autonomy - and this is very important. The restoration of these life support systems, which we need to look at, involves also cultivation <span class=\"quote\"> arthere website announcing the footsteps library when it is published          FERNANDO GARCÍA-DORY</span>",
            "https://www.fernandogarciadory.info/index.php?/texts/interview-artpapers-janfeb-2011/2/ "
        ],
        [
            " but to consider ourselves as part of a cycle together with other living forms.” <span class=\"quote\"> arthere website announcing the footsteps library when it is published          FERNANDO GARCÍA-DORY</span>",
            "https://www.fernandogarciadory.info/index.php?/texts/interview-artpapers-janfeb-2011/2/ "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_38.jpg)\"></div><span class=\"quote\">Cooking Sections, The Lasting Pond, 2021. SALT Beyoğlu. Installation detail. Photo: Mustafa Hazneci / SALT.</span>",
            [
                "Cooking Sections, The Lasting Pond, 2021. SALT Beyoğlu. Installation detail. Photo: Mustafa Hazneci / SALT."
            ]
        ]
    ],
    [
        [
            " “In the art context, my practice is more about just diverting attention to certain questions and topics I find interesting, like food systems or rural environment. But with my projects, like what I’m doing with this village, it’s more about creating a space for other forms of life—a collective life with a land-based economy, a community of practice that’s beyond the discursive aspect of activism.”<span class=\"quote\"> arthere website announcing the footsteps library when it is published          FERNANDO GARCÍA-DORY</span>",
            "https://www.fernandogarciadory.info/index.php?/texts/interview-artpapers-janfeb-2011/2/ "
        ],
        [
            "  “Art is a value in itself, creates space and food for thought. And this freedom - apart from economic usability and marketing - is urgently needed.” <span class=\"quote\"> We could link to the Dumpling Post since it’s going to be published online in September.              EVA EGERMANN, CRIP MAGAZINE </span>",
            "https://issuu.com/cripmagazine/docs/crip_magazine_1 "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_37.jpg)\"></div><span class=\"quote\">Cooking Sections, Exhausted, 2021. SALT Beyoğlu. Installation detail. Photo: Mustafa Hazneci / SALT.</span>",
            [
                "Cooking Sections, Exhausted, 2021. SALT Beyoğlu. Installation detail. Photo: Mustafa Hazneci / SALT."
            ]
        ]
    ],
    [
        [
            "“We make an annual walking ritual on the coast with a sense of worry about the heap of vulnerabilities accompanying the sinking of Jakarta. We walked through disputed land, frequent floods, contested coastline, contaminated mangrove forest, observing mutant fish due to the collapsing of ecological carrying capacity and the construction of a giant sea wall crammed with mythological fiction among the scandalous siege of artificial islands. To see what’s been happening right now makes us not so optimistic to project the future. But as artists, we believe beauty is always present anywhere even in a catastrophe.” <span class=\"quote\">  POETRY CHANNEL A selection of poetry in Turkish will fly around the sphere. Süreyyya and Erdem will prepare them to feed the site.                                           TITA SALINA & IRWAN AHMETT</span>",
            
        ],
        [
            " “Green Papaya is as much interdependent as it is independent. Green Papaya is not sustainable. Green Papaya is destined to close. It will be ripe and ready for the plucking. Working towards its death <span class=\"quote\">                GREEN PAPAYA</span>",
            "https://aaa.org.hk/en/ideas/ideas/green-papaya-art-projects-why-artist-run-spaces "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_36.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_35.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_34.jpg)\"></div><span class=\"quote\">Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office,Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office,Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office</span>",
            [
                "Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office",
                "Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office",
                "Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office"
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_27.jpg)\"></div><span class=\"quote\">Salmon: A Red Herring. Image: Office Ben Ganz and Luke Libera Moore</span>",
            [
                "Salmon: A Red Herring. Image: Office Ben Ganz and Luke Libera Moore"
            ]
        ],
        [
            " “Green Papaya is (...) is a halfway house for ideas, a space to hang out and have real conversations again, a chance to cook and share meals. It is less about art than it is about being artists and being human again—and questioning what that means in our current context. <span class=\"quote\">                GREEN PAPAYA</span>",
            "https://aaa.org.hk/en/ideas/ideas/green-papaya-art-projects-why-artist-run-spaces "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_29.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_28.jpg)\"></div><span class=\"quote\">Cooking Sections, 2018. Courtesy: the artists. Photo: Lourdes Cabrera. ,Cooking Sections, 2017. Courtesy: Surface. Photo: Paul Plews.</span>",
            [
                "Cooking Sections, 2018. Courtesy: the artists. Photo: Lourdes Cabrera. ",
                "Cooking Sections, 2017. Courtesy: Surface. Photo: Paul Plews."
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_26.jpg)\"></div><span class=\"quote\">Cooking Sections, Mussel Beach, 2019. CURRENT: LA Public Art Triennial. Installation detail. Photo: Cooking Sections</span>",
            [
                "Cooking Sections, Mussel Beach, 2019. CURRENT: LA Public Art Triennial. Installation detail. Photo: Cooking Sections"
            ]
        ],
        [
            " a new humanist paradigm that we could say is also post-human as it no longer puts human beings at the centre of creation <span class=\"quote\"> arthere website announcing the footsteps library when it is published          FERNANDO GARCÍA-DORY</span>",
            "https://www.fernandogarciadory.info/index.php?/texts/interview-artpapers-janfeb-2011/2/ "
        ],
        [
            "...But besides the shared physical resources, the most valuable commodity is the presence and time we have for each other. Green Papaya is sustained by a small community who like the kind of art that no one else thinks of as art—yet! It aspires to provide a space for critique and experimentation.<span class=\"quote\">                GREEN PAPAYA</span>",
            "https://aaa.org.hk/en/ideas/ideas/green-papaya-art-projects-why-artist-run-spaces "
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_25.jpg)\"></div><span class=\"quote\">Cooking Sections, Mussel Beach, 2019. CURRENT: LA Public Art Triennial. Installation view. Photo: Cooking Sections</span>",
            [
                "Cooking Sections, Mussel Beach, 2019. CURRENT: LA Public Art Triennial. Installation view. Photo: Cooking Sections"
            ]
        ],
        [
            " ...pasti saya mengangkat ide tentang pluralisme di dalam bentuk karya. Saya ingin menungkapkan bagaimana kebudayaan di sini yang bersifat <span class=\"quote\"> ARAHMAIANI FEISAL </span>",
            "https://www.cobosocial.com/dossiers/arahmaiani-superheroine-of-indonesian-contemporary-art/ "
        ],
        [
            "  “The Silent University aims to address and reactivate the knowledge of the participants and make the exchange process mutually beneficial by inventing alternative currencies, in place of money or free voluntary service. The Silent University’s aim is to challenge the idea of silence as a passive state, and explore its powerful potential through performance, writing, and group reflection. These explorations attempt to make apparent the systemic failure and the loss of skills and knowledge experienced through the silencing process of people seeking asylum.” <span class=\"quote\">AHMET ÖĞÜT, SILENT UNIVERSITY </span>",
            "http://thesilentuniversity.org/ "
        ]
    ],
    [
        [
            " “Who are you?” the crowd shouts “Adam the wisdom of God.” the man replies “What do you want? they ask “I want to speak.” he saysDanarto, Adam the Wisdom of God, 1975, page 32<span class=\"quote\">                 DANARTO DKK</span>",
            "https://drive.google.com/drive/folders/1ULseOn5X730AAkxiqLAcbr2mqi3mh9Qa "
        ],
        [
            " terbuka dan pluralisis sejak dulu - dari teribu tahun lebih - itu menerima semua budaya maupun keyakinan dan mengambil hal yang positif dari sana selalu menggabungkannya menjadi sesuatu pendekatan yang sifatnya plural dan sincretisme.”   <span class=\"quote\"> ARAHMAIANI FEISAL </span>",
            "https://www.cobosocial.com/dossiers/arahmaiani-superheroine-of-indonesian-contemporary-art/ "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_23.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_22.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_21.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_20.jpg)\"></div><span class=\"quote\">Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ,Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ,Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ,Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. </span>",
            [
                "Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ",
                "Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ",
                "Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ",
                "Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. "
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_6 sep_img_inner_whole_6\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_19.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_5 sep_img_inner_whole_6\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_18.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_4 sep_img_inner_whole_6\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_17.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_6\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_16.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_6\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_15.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_6\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_14.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_6\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_13.jpg)\"></div><span class=\"quote\">Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. </span>",
            [
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. "
            ]
        ],
        [
            " “Taut's culture/nature pair as a key concept to re-find the local roots of a community, the concept of continuity, his re-fashioned interest in regional architectural qualities, and above all the notion of a synthesis of tradition and modernity, all seem to echo the same dialectical opposition mediating inside a nationalistic ideology fostered by the Ministry of Education in those years, based on the historical interplay between a spontaneous support of modernist and progressive trends and a radical quest for cultural identity that distinguished the emerging nationalist politics in Turkey.” <span class=\"quote\">    ALICE MICELLI                YUTA NAKAMURA, A PROJECT ON BRUNO TAUT</span>",
            "https://built-heritage.springeropen.com/track/pdf/10.1186/BF03545693.pdf "
        ],
        [
            "“We tend to form some kind of a community with those we share a rhythm. Such rhythm can be a construct, but once it is constructed, rhythm becomes a regulator, a substance that binds. At the same time, rhythm can be the substance that dissolves a community. Rhythm is very difficult to define. It is found everywhere, even where there isn’t in appearance. Some theorists suggest that there is rhythm wherever there is an expenditure of energy. In this way, rhythm can give us insight in how to be friendly and hospitable to those whom we don’t share a rhythm.”<span class=\"quote\">    CHRISTIAN NYAMPETA </span>",
            "https://medium.com/@camdenartscentre/in-conversation-christian-nyampeta-gina-buenfeld-d32fed700b "
        ]
    ],
    [
        [
            " “We are not oyster fishermen or citrus growers or lawyers but we bring people together with different expertise to have discussions across political and environmental horizons.”<span class=\"quote\">                 COOKING SECTIONS, SURVEY PACK WALLOWLANDS</span>",
            "https://www.frieze.com/article/eating-end-world "
        ],
        [
            "“My attitude towards my artistic production was always to involve references and connotations from my lived environment and my internal thoughts, and so comes from myself, my true organism and my life in Istanbul. As I was unable to leave Turkey for 16 years because I was not permitted a passport, I became intent on observing everything that was going on around me. The opportunity to travel opened up another horizon that allowed international discourse on post-colonialism and paradigm shifts, but the subjects and interests I worked with continued to be those that were within my daily reach.”<span class=\"quote\">      GÜLSÜN KARAMUSTAFA </span>",
            "https://blog.saltonline.org/post/95367715734/the-bold-and-poignant-palette-of-gulsun-karamustafa "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_12.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_11.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_10.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_3\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_09.jpg)\"></div><span class=\"quote\">Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. </span>",
            [
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. "
            ]
        ]
    ],
    [
        [
            "“In my quest for answers, I am particularly interested in norms and values that we inherited from our ancestors. In my work, I try to reinterpret these philosophies in the context of contemporary conditions.”<span class=\"quote\"> ARAHMAIANI FEISAL </span>",
            "https://www.cobosocial.com/dossiers/arahmaiani-superheroine-of-indonesian-contemporary-art/ "
        ],
        [
            " “Can puppet theatre be more than puppet theatre by giving purpose and aggressivity back to the arts and make the gods' voices yell as loud as they should yell?”<span class=\"quote\">              BREAD AND PUPPET THEATRE, DEMONS OF SOCIETY </span>",
            "https://breadandpuppet.org/wp-content/uploads/2013/01/Radicality-of-the-Puppet-Theater.pdf"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_08.jpg)\"></div><span class=\"quote\">Cooking Sections, The Empire Remains Shop, 2016. Installation view, London. Courtesy: the artists. Photo: Tim Bowditch. </span>",
            [
                "Cooking Sections, The Empire Remains Shop, 2016. Installation view, London. Courtesy: the artists. Photo: Tim Bowditch. "
            ]
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_07.jpg)\"></div><span class=\"quote\">Cooking Sections, Devaluing Property Real Estate Agency, 2016. Installation view at The Empire Remains Shop, London. Courtesy: the artists. Photo: Cooking Sections. </span>",
            [
                "Cooking Sections, Devaluing Property Real Estate Agency, 2016. Installation view at The Empire Remains Shop, London. Courtesy: the artists. Photo: Cooking Sections. "
            ]
        ],
        [
            "“...in the sense of claiming a degrading discourse: claiming the crank (the ill, the feigning ill, the one who begs and the collapse of the distinction between the three). Opacity and the right to not be understood.”<span class=\"quote\"> We could link to the Dumpling Post since it’s going to be published online in September.              EVA EGERMANN, CRIP MAGAZINE </span>",
            "https://issuu.com/cripmagazine/docs/crip_magazine_1 "
        ],
        [
            "“The “Serial of the Universe”, the never ending history of our wars, the terrifying hum of the earthquake, our warming air and water, our globalisation, our greeds, our angers, our rights, our economies and our crises, our road maps showing the way to European civilisation, our terror maps reaching into the depths of black holes, our genome maps, our diseases, our miraculous remedies, as well as the birds and the bees, the one-for-the-roads, the poor, the women, the children, the child abusers, the splendour and the misery of the media, the music of the spheres, and, last but not least: “All the beauty of human civilization – our art, our music, our literature – lies beyond these two fundamentalist, ideological poles.” (Roy) Our Open Site is a small flashlight, but one whose handle stretches to fit as many hands as want to hold it or hold on to it.”<span class=\"quote\">AÇIK RADYO </span>",
            "https://acikradyo.com.tr/manifesto-acik-radyo "
        ]
    ],
    [
        [
            "“There is no such boundary between life and art in my practice. All my projects are alive and actively doing something in the world. ”<span class=\"quote\"> URSULA BIEMANN, DEVENIR UNIVERSITY</span>",
            "https://www.youtube.com/watch?v=GDv47X9q5q0 (11:57-12:31)"
        ],
        [
            " “We don’t think we provide solutions because we don’t have them. Our social and political interventions question and problematize certain situations. By drawing attention to various situations we are complicating them and making people take more responsibility.”<span class=\"quote\">                 COOKING SECTIONS, SURVEY PACK WALLOWLANDS</span>",
            "https://www.frieze.com/article/eating-end-world "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_4 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_06.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_3 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_05.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_04.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_02.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_4\" style = \"background-image:url(img/ib_image_batch/cooking/cooking_01.jpg)\"></div><span class=\"quote\">Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Cooking Sections. ,Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: Atlas Arts. Photo: Ruth Clark. ,Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Nicholas Middleton. ,Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Colin Hattersley.,Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Nicholas Middleton.</span>",
            [
                "Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Cooking Sections. ",
                "Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: Atlas Arts. Photo: Ruth Clark. ",
                "Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Nicholas Middleton. ",
                "Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Colin Hattersley.",
                "Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Nicholas Middleton."
            ]
        ]
    ],
    [
        [
            "“For me, a mobile cheese making unit is playing on those contradictions: making cheese entails changing the state of matter from liquid to solid; it is microbiological livestock management and an ancient pastoralist biotechnology. The wish to learn it fast, in one morning workshop, deals with our wish for instant gratification. The “authentic” foods we yearn for could also be accessible, self-made, and not elite gastronomic merchandise. It’s a way to reconnect with food makers and the problems they face. Food is therefore more than a political tool, it has become politics in itself.”<span class=\"quote\"> arthere website announcing the footsteps library when it is published          FERNANDO GARCÍA-DORY</span>",
            "https://www.fernandogarciadory.info/index.php?/texts/interview-artpapers-janfeb-2011/2/ "
        ],
        [
            " a concept that is connected with care, and connected also with <span class=\"quote\"> arthere website announcing the footsteps library when it is published          FERNANDO GARCÍA-DORY</span>",
            "https://www.fernandogarciadory.info/index.php?/texts/interview-artpapers-janfeb-2011/2/ "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/bread9.jpg)\"></div><span class=\"quote\">BREAD AND PUPPET THEATRE</span>",
        ]
    ],



    //////////////////
    [
        [
            " “The travelling puppet shows range from tightly composed theatre pieces presented by members of the company to extensive outdoor pageants which require the participation of many volunteers.”<span class=\"quote\">              BREAD AND PUPPET THEATRE, DEMONS OF SOCIETY </span>",
            "https://breadandpuppet.org/wp-content/uploads/2013/01/Radicality-of-the-Puppet-Theater.pdf"
        ],
        [
            "“The “Flag Project” is designed to study and develop collective creativity. I implement an “open art system,” in which art is defined as broadly as possible, to break through rigid discourses and established values, engaging in democratic dialogue, but also taking a critical approach when needed. During this process, outcomes—artworks or other forms—are produced collectively, collaboratively or individually. Another aim is to create and maintain a network that enables the exchange of ideas and experiences, or development in the form of collaborations.”<span class=\"quote\"> ARAHMAIANI FEISAL </span>",
            "https://www.cobosocial.com/dossiers/arahmaiani-superheroine-of-indonesian-contemporary-art/ "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/bread8.jpg)\"></div><span class=\"quote\">BREAD AND PUPPET THEATRE</span>",
        ]
    ],
    [
        [
            " We can use quotes from the 1st edition of the Dumpling Post in September. <span class=\"quote\">        DUMPLING POST</span>",
        ],
        [
            " We can think of the university as a healing practice for the territory, that has been injured by colonial intervention, extractivist projects, and by epistemological occupation.<span class=\"quote\"> URSULA BIEMANN, DEVENIR UNIVERSITY</span>",
            "https://www.youtube.com/watch?v=GDv47X9q5q0 (11:57-12:31)"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/bread7.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/bread6.jpg)\"></div><span class=\"quote\">BREAD AND PUPPET THEATRE</span>",
        ]
    ],
    [
        [
            " “We use the art world as a platform to start a conversation. But it doesn’t stay there. The goal is to mobilize a series of actions in collaboration with residents and communities that bring change.”<span class=\"quote\">                 COOKING SECTIONS, SURVEY PACK WALLOWLANDS</span>",
            "https://www.frieze.com/article/eating-end-world "
        ],
        [
            " It is not a project that happens 'over there'. It has very much to do with Western institutions of learning. <span class=\"quote\"> URSULA BIEMANN, DEVENIR UNIVERSITY</span>",
            "https://www.youtube.com/watch?v=GDv47X9q5q0 (11:57-12:31)"
        ],
        [
            "“I understood the message (of the forest) to be that respect and reciprocity are fundamental and universal values necessary to achieve a fulfilled and happy life.”<span class=\"quote\"> LAURA ANDERSON BARBATA </span>",
            "https://www.youtube.com/watch?v=zRzYfaUCCXI (2:06-2:19) "
        ]
    ],
    [
        [
            "Puppetry is conceptual sculpture (...) technically a collage art (..). The conceptual element, the sheer concentration on concept at the expense of communicative pleasantness, the sacrificing of the decorative or handsome appearance....”<span class=\"quote\">              BREAD AND PUPPET THEATRE, DEMONS OF SOCIETY </span>",
            "https://breadandpuppet.org/wp-content/uploads/2013/01/Radicality-of-the-Puppet-Theater.pdf"
        ],
        [
            " “I think contemporary art is the only venue that can really host freedom of speech and critical thinking,”<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4 (3:20-3:38)"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/bread5.jpg)\"></div><span class=\"quote\">BREAD AND PUPPET THEATRE</span>",
        ]
    ],
    [
        [
            " “I am the light hanging down in clusters at 300,000 kilometers an hour, opening dawn so that it can be called dawn, placing the sun over their heads so they can say that it is day, throwing it to the west. So you can say afternoon, the burning ball which sinks into the ocean, gilding the waves with silver needles, the beach looks as though it has been swept with a brush, the dark unfolds stretching endlessly, you wonder where I am.”Danarto, Adam the Wisdom of God, 1975, page 24<span class=\"quote\">                 DANARTO DKK</span>",
            "https://drive.google.com/drive/folders/1ULseOn5X730AAkxiqLAcbr2mqi3mh9Qa "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/bread3.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/bread2.jpg)\"></div><span class=\"quote\">BREAD AND PUPPET THEATRE</span>",
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/bread4.jpg)\"></div><span class=\"quote\">BREAD AND PUPPET THEATRE</span>",
        ]
    ],
    [
        [
            "“I am an artist. And I decided to ground my practice in the creation of works that find their purpose in the social realm through group participation.”<span class=\"quote\"> LAURA ANDERSON BARBATA </span>",
            "https://www.youtube.com/watch?v=zRzYfaUCCXI (2:06-2:19) "
        ],
        [
            " The indigenous scientist is the ultimate radical figure which has the capacity of merging the contradictions; of being at once scientific and a political actor, cohabiting the natural world while seeking to understand it. Most importantly, this figure stands for a different kind of epistemology that reconnects us to other ways of knowing the human-nature symbiosis. In other words, this figure embodies some of the most fundamental problems in our mind-nature conception.<span class=\"quote\"> URSULA BIEMANN, DEVENIR UNIVERSITY</span>",
            "https://www.youtube.com/watch?v=GDv47X9q5q0 (11:57-12:31)"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/bread.docx)\"></div><span class=\"quote\">BREAD AND PUPPET THEATRE</span>",
        ]
    ],
    [
        [
            " “I/E is a collective instrument that responds to outdoor situations. On this project, I wanted to propose new ways of working with concrete sound and field recording. For me, working in, out and from exterior environments has become important. The environment is not just sound material or a sound source – its acoustics and social dynamics, for example, can inform composition and inspire new ways to perform and collaborate.”<span class=\"quote\">    TAREK ATOUI, I/E ISTANBUL </span>",
            "https://www.ibraaz.org/interviews/130 "
        ],
        [
            "  The platform, Devenir Universidad, is a way of letting everyone in on the conversation. Include everyone, letting everyone know about the current state of affairs. In other words, it creates transparency of the process. It makes the process comprehensible within the community.<span class=\"quote\"> URSULA BIEMANN, DEVENIR UNIVERSITY</span>",
            "https://www.youtube.com/watch?v=GDv47X9q5q0 (11:57-12:31)"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/Abuela_Eudocia_1.2.1.jpg)\"></div><span class=\"quote\">URSULA BIEMANN</span>"
        ]
    ],
    [
        [
            " These expressions have the capacity to cross boundaries, and they invite us to honour traditions. Through the process, we recognize ourselves in the work and build art-based social-practice projects that result in long-term exercises of reciprocity and collaboration.<span class=\"quote\"> LAURA ANDERSON BARBATA </span>",
            "https://www.youtube.com/watch?v=zRzYfaUCCXI (2:06-2:19) "
        ],
        [
            "It is very important to me that the bridges built between communities–the personal ties and experiences gained–continue far beyond each project. Art is the vehicle, the pretext for a conversation and for an exchange of ideas that incorporate the material as well as the personal for its execution. <span class=\"quote\"> LAURA ANDERSON BARBATA </span>",
            "https://www.youtube.com/watch?v=zRzYfaUCCXI (2:06-2:19) "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20161006_144453.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20161006_144419.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20161006_144344.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>"
        ]
    ],
    [
        [
            " “A lot of the decisions on how elements are placed and in dialogue with each and with the space came from listening to the material one by one. So, listening to each stone, listening to the rails, and seeing how these elements are transmitting and emitting sound.” <span class=\"quote\">    TAREK ATOUI, I/E ISTANBUL </span>",
            "https://www.ibraaz.org/interviews/130 "
        ],
        [
            " In the process of exchange, in sharing and learning from each other, we agree on what we will give and what we would like to receive, and in this way, all participants become stakeholders in the project.<span class=\"quote\"> LAURA ANDERSON BARBATA </span>",
            "https://www.youtube.com/watch?v=zRzYfaUCCXI (2:06-2:19) "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160930_092132.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160930_092128.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160919_095034.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160919_095000.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160919_094959.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160919_094957.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ],
        [
            " “ We were really interested in how we could use it as a tool to think about emancipating or decolonizing contemporary food practices. The whole project tried to think of counterapproaches to buying and selling. If the neoliberal world has appropriated the language of sustainability, can we do it the other way around and appropriate neoliberal tools to challenge the logic of the franchise and think of it in terms of value beyond profit margins? We’re interested in the original French meaning of “franchise” as releasing oneself from servitude.<span class=\"quote\">                 COOKING SECTIONS, SURVEY PACK WALLOWLANDS</span>",
            "https://www.frieze.com/article/eating-end-world "
        ],
        [
            "“Art needs to update its own techniques as fast as the industry or politics in order to be able to respond to all of this, to produce something about these social codes or to say something about the historical field. <span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4 (3:20-3:38)"
        ]
    ],
    [
        [
            "“It's not about this mangrove moving perfectly, it's about all of us coming together and obsessing about this machine, for months. It's about a way of thinking. If we talk about all these issues; we need to come together — it's not one person that's gonna save the world. <span class=\"quote\">MARTHA ATIENZA </span>",
            "https://www.adobomagazine.com/the-magazine/martha-atienzas-equation-of-state-using-video-art-and-island-technology-to-illuminate-the-effects-of-climate-change-in-bantayan-islands-coastal-communities-and-the-importan/ (1:00-1:22) "
        ],
        [
            "“Of course art is something to enjoy, but the content is not always enjoyable. But we have to talk about these tragedies and traumas and catastrophes — they are important subjects of art.”<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4 (3:20-3:38)"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160916_104259.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160916_104256.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/20160916_104254.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/20150910_091357.jpg)\"></div><span class=\"quote\">NIRWAN AHMAD ARSUKA</span>",
        ],
        [
            " “Working with deaf people totally changed my practice. <span class=\"quote\">    TAREK ATOUI, I/E ISTANBUL </span>",
            "https://www.ibraaz.org/interviews/130 "
        ],
        [
            "“Significant to Atienza’s aesthetic practice is her active social obligation to her community. Rather than passively documenting the people and ecology of Bantayan Island, her social practice helps to augment the full complexities of human subjectivity, society and the environment. As she says, ‘My work is always inspired by the question: can art trigger empowerment and tackle real issues in society?’”<span class=\"quote\">MARTHA ATIENZA </span>",
            "https://www.adobomagazine.com/the-magazine/martha-atienzas-equation-of-state-using-video-art-and-island-technology-to-illuminate-the-effects-of-climate-change-in-bantayan-islands-coastal-communities-and-the-importan/ (1:00-1:22) "
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/2015-05-22_17.01.43.jpg)\"></div><span class=\"quote\">Yuta Nakamura</span>",
        ],
        [
            "“But ultimately, who is it going to answer? Not the authority. In fact, that almost never happened. I realized the most realistic thing was to answer to the problem myself. You have to try to give an answer, rather than limiting yourself to questioning and criticizing. In a way, through the answer you also express a critique, but in a subtler way, through action. As an activist, you can of course be manipulated, so the trap is always there. But by going more directly into a solution, you get something more real which can’t be manipulated so easily by other people’s agendas. The important thing is that it never becomes us against them. When it becomes all about defeating your enemy, you lose sight of the change you want to see in the world. That’s what I’ve learned from my experience anyway.”<span class=\"quote\"> ARAHMAIANI FEISAL </span>",
            "https://www.cobosocial.com/dossiers/arahmaiani-superheroine-of-indonesian-contemporary-art/ "
        ],
        [
            "“My work as a composer is to let <span class=\"quote\">    TAREK ATOUI, I/E ISTANBUL </span>",
            "https://www.ibraaz.org/interviews/130 "
        ]
    ],
    [
        [
            "“Kini, kembali seluruh relawan diundang untuk jadi seniman. Yang mengundang kali ini adalah penyelenggara Istanbul Bienal, Turki. Karya relawan yang memikat bukan hanya akan dapat dinikmati oleh warga Indonesia, atau Turki saja, tapi oleh seluruh dunia.”“The Istanbul Biennial is an opportunity for our volunteers to become artists. The creations of our volunteers would therefore not only be enjoyed by the citizens of Indonesia, or Turkey, but by the whole world. “<span class=\"quote\">NIRWAN AHMAD ARSUKA, PUSTAKA BERGERAK</span>",
            "https://www.facebook.com/pg/pustakabergerak.id/posts/ (27 Jan) "
        ],
        [
            "“Selain itu, sejak awal saya ingin memberikan karakter lokal dengan gerakan Pustaka Bergerak. Karena Pustaka Bergerak ini bukan hanya gerakan literasi, tapi kultural yang menonjolkan aspirasi para relawannya. Kami ingin masyarakat bangga dengan budaya lokalnya.”“This isn't just a literacy movement, but a cultural one that takes aspirations from its volunteers. We want the citizens to be proud of their local identity.”<span class=\"quote\">NIRWAN AHMAD ARSUKA, PUSTAKA BERGERAK</span>",
            "https://www.facebook.com/pg/pustakabergerak.id/posts/ (27 Jan) "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/_DSC9566_fullsize.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/_DSC9551_fullsize.jpg)\"></div><span class=\"quote\">Yuta Nakamura</span>",
        ]
    ],
    [
        [
            "“Kedua, waktu tahun 2014 saya berkuda dari Pamulang, Tangerang Selatan ke Parompong, Bandung, lewat jalan kampung. Saya banyak dibantu anak-anak untuk menunjukkan jalan. Bahkan mereka carikan rumput untuk makan kuda  dan dibawa ke lapangan. Saya jalan dengan dua ekor kuda milik sendiri, Merpu dan Arjuna Ireng. Kuda itu jenis sandalwood pony atau kuda pacu asli Indonesia setinggi 140 cm. Saya banyak mengobrol dengan anak-anak di jalan. Tapi begitu saya tanya soal asal usul nama kampung, mereka tidak tahu dan tidak bisa cerita. Orangtuanya juga pada tidak tahu. Saya prihatin, karena saya ingin menulis daerah-daerah yang saya lalui, tapi tidak ada yang bisa bantu karena tidak pada tahun. Kalau cerita kampung itu hilang, mereka tidak ada ikatan emosional dengan kampung itu. Sehingga akhirnya mereka bisa tidak peduli dengan kampung itu. Imbasnya bahaya, mulai dari kemiskinan sampai pengangguran karena proses urbanisasi. Sehingga begitu saya pulang, saya janji akan membawa buku ke kampung-kampung itu. Saya tidak membuat perpusatakaan. Tapi awal Pustaka Bergerak ada di Purbalingga.”  “If the stories of these villages disappear, they won't have any emotional ties to that village. Even at its end, they'll be apathetic towards the village. This harmful impact began with poverty and unemployment due to the process of urbanisation. When I returned, I promised I would bring books to the village.”  <span class=\"quote\">NIRWAN AHMAD ARSUKA, PUSTAKA BERGERAK</span>",
            "https://www.facebook.com/pg/pustakabergerak.id/posts/ (27 Jan) "
        ],
        [
            "“I wanted to turn the ruins into sculptures because they carry for me the memory of something lost, yet at the same time they are reminders of what is no longer there. A fragment. Yet complete in its own way because any attempt to fix it, will erase its uniqueness. It teaches nothing, except that what was once is gone and the only way to approach it is through art without direct reference to an event.”<span class=\"quote\">LIDA ABDUL </span>",
            "http://www.artvehicle.com/interview/1 "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/_DSC9540_fullsize.jpg)\"></div><span class=\"quote\">Yuta Nakamura</span>",
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_2 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/_DSC9525_fullsize.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/_DSC9518_fullsize.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_2\" style = \"background-image:url(img/ib_image_batch/_DSC9522_fullsize.jpg)\"></div><span class=\"quote\">Yuta Nakamura</span>",
        ],
        [
            "“It is by micro-political acting that we want to participate in making the city more ecological and more democratic, to make the space of proximity less dependent on top-down processes and more accessible to its users. The ‘self-managed architecture’ is an architecture of relationships, processes and agencies of persons, desires, skills and know-hows. Such an architecture does not correspond to a liberal practice but asks for new forms of association and collaboration, based on exchange and reciprocity and involving all those interested (individuals, organisations, institutions), whatever is their scale.”<span class=\"quote\">ATELIER D’ARCHITECTURE AUTOGEREE </span>",
            "https://www.urbantactics.org/about/ "
        ],
        [
            "“Our architecture is at the same time political and poetic as it aims above all to ‘create relationships between worlds’.”<span class=\"quote\">ATELIER D’ARCHITECTURE AUTOGEREE </span>",
            "https://www.urbantactics.org/about/ "
        ]
    ],
    [
        [
            "“It’s been more than 10 years, and I sometimes still get emotional about how this whole nuclear history is so prevalent in many places in the world and still not spoken about.”<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4 (3:20-3:38)"
        ],
        [
            "“I feel that I can easily cross cultural borders. I think that is what is wonderful about not having a fixed notion of identity or nationhood. There is really nothing I have a duty to do. It bothers people, this refusal to choose between us and them because I guess when you announce your identity publicly people know what to expect. If I were to identify with anything, it would be Afghanistan because it's a country that needs so much attention.”<span class=\"quote\">LIDA ABDUL </span>",
            "http://www.artvehicle.com/interview/1 "
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_1 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/_DSC9513_fullsize.jpg)\"></div><div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_1\" style = \"background-image:url(img/ib_image_batch/_DSC9501_fullsize.jpg)\"></div><span class=\"quote\">Yuta Nakamura</span>",
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url(img/ib_image_batch/_DSC9446_fullsize.jpg)\"></div><span class=\"quote\">Yuta Nakamura</span>",
        ],
        [
            "“Art needs to dominate the means of production that industry dominates.” <span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4 (3:20-3:38)"
        ],
        [
            " “It's not really about this machine and this thing, here, it's about all the conversations we've had. We've been dreaming about other stuff, and we talk about other things we could do together.”<span class=\"quote\">MARTHA ATIENZA </span>",
            "https://www.adobomagazine.com/the-magazine/martha-atienzas-equation-of-state-using-video-art-and-island-technology-to-illuminate-the-effects-of-climate-change-in-bantayan-islands-coastal-communities-and-the-importan/ (1:00-1:22) "
        ]
    ]
]





    var inittime_h = new Date().toString().split(' ')[4].split(':')[0]
    var initrotation = inittime_h/24
    var initoffset = 2


    var scene = new THREE.Scene();
    var layer_amount = 18


    var whole_pivot = new THREE.Group()
    var layer_pivot_array = Array(layer_amount)
    var layer_material_array = Array(layer_amount)
    var plate_pivot_array = Array(layer_amount)
    var light1, light2

    var whole_pivot_cloned = new THREE.Group()
    var layer_pivot_array_cloned = Array(layer_amount)
    var layer_material_array_cloned = Array(layer_amount)
    var plate_pivot_array_cloned = Array(layer_amount)
    var light1_cloned, light2_cloned

    var translatey = 15
    var translatez = 10
    var staying = 5
    var zoomed_out = false
    var zoomed_out_counter = 0
    var canvas , renderer , whole_light
    var selected = 0
    const loader = new THREE.TextureLoader();

    var scene_dis = 100000
    var scrolldirection_value = 0
    var scrolling_value = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    var raycaster_obj = []
    var raycaster_obj_link = []
    for (var i = db.length - layer_amount; i < db.length; i++) {
        if(db[i][0].length>1){
            if(typeof db[i][0][1]==='string'){raycaster_obj_link.push(db[i][0][1].split('(')[0])}else{raycaster_obj_link.push('')}
            
        }else{
            raycaster_obj_link.push('')
        }
        if(db[i][1].length>1){
            if(typeof db[i][1][1]==='string'){raycaster_obj_link.push(db[i][1][1].split('(')[0])}else{raycaster_obj_link.push('')}
            
        }else{
            raycaster_obj_link.push('')
        }
        if(db[i][2].length>1){
            if(typeof db[i][2][1]==='string'){raycaster_obj_link.push(db[i][2][1].split('(')[0])}else{raycaster_obj_link.push('')}
            
        }else{
            raycaster_obj_link.push('')
        }
        if(i == db.length-1){
            console.log(raycaster_obj_link)
        }
    }
    var speed = 1000

        var scrollpos = 0
    var w = window.innerWidth
    var h = window.innerHeight
    $('.fake_scroll').css({'height':((layer_amount-1)*translatey*h)+'px'})
    $(window).scrollTop((translatey*h)*(initoffset + initrotation))
    if(window.location.hash && window.location.hash.split('#')[1] === 'URSULA-BIEMANN') {
        $(window).scrollTop((translatey*h)*(5))
    }
    if(window.location.hash && window.location.hash.split('#')[1] === '// LAURA-ANDERSON-BARBATA') {
        $(window).scrollTop((translatey*h)*(8))
    }
        scene.add(whole_pivot)


    $(window).scroll(function (event) {
            scrollpos = $(window).scrollTop();
        var k = Math.floor(scrollpos/(translatey*h)) 
        selected = k

                if(scrollpos > scrolldirection_value){
                    scrolldirection = 'down'
                }else{
                    scrolldirection = 'up'
                }
                scrolldirection_value = scrollpos

                whole_pivot_cloned.rotation.y = degrees_to_radians(scrollpos%(translatey*h)/(translatey*h)*360)
                whole_pivot.rotation.y = degrees_to_radians(scrollpos%(translatey*h)/(translatey*h)*360)

                get_scrolling_value(scrollpos,k)


    });
    function get_scrolling_value(scrollpos,k){
        console.log('heyyyy')
                var transition_unit = 0
                if(scrollpos%(translatey*h) < (staying*h)){
                    console.log('1')
                            scrolling_value[0][0] = translatey*1.98
                            scrolling_value[0][1] = 4.0
                            scrolling_value[0][2] = 4.0

                            scrolling_value[1][0] = translatey*0.997
                            scrolling_value[1][1] = 2.5
                            scrolling_value[1][2] = 2.5

                            scrolling_value[2][0] = translatey*0.07
                            scrolling_value[2][1] = 1
                            scrolling_value[2][2] = 1

                            scrolling_value[3][0] = translatey*-0.76
                            scrolling_value[3][1] = 0.45
                            scrolling_value[3][2] = 0.45

                            scrolling_value[4][0] = translatey*-0.73
                            scrolling_value[4][1] = 0.2
                            scrolling_value[4][2] = 0.2

                            scrolling_value[5][0] = translatey*-0.73
                            scrolling_value[5][1] = 0.15
                            scrolling_value[5][2] = 0.15

                            scrolling_value[6][0] = translatey*-0.73
                            scrolling_value[6][1] = 0
                            scrolling_value[6][2] = 0

                }else{
                    console.log('2')
                        transition_unit = ((scrollpos%(translatey*h)-(staying*h))/((translatey*h)-(staying*h)))*10
                        
                            scrolling_value[0][0] = map_range(transition_unit, 0, 10, translatey*1.98, translatey*1.98)
                            scrolling_value[0][1] = map_range(transition_unit, 0, 10, 4.0, 10.0) 
                            scrolling_value[0][2] = map_range(transition_unit, 0, 10, 4.0, 10.0)

                        
                            scrolling_value[1][0] = map_range(transition_unit, 0, 10, translatey*0.997, translatey*1.98)
                            scrolling_value[1][1] = map_range(transition_unit, 0, 10, 2.5, 4.0)
                            scrolling_value[1][2] = map_range(transition_unit, 0, 10, 2.5, 4.0)

                        
                            scrolling_value[2][0] = map_range(transition_unit, 0, 10, translatey*0.07, translatey*0.997)
                            scrolling_value[2][1] = map_range(transition_unit, 0, 10, 1, 2.5)
                            scrolling_value[2][2] = map_range(transition_unit, 0, 10, 1, 2.5)

                        
                            scrolling_value[3][0] = map_range(transition_unit, 0, 10, translatey*-0.76, translatey*0.07)
                            scrolling_value[3][1] = map_range(transition_unit, 0, 10, 0.45, 1)
                            scrolling_value[3][2] = map_range(transition_unit, 0, 10, 0.45, 1)

                        
                            scrolling_value[4][0] = map_range(transition_unit, 0, 10, translatey*-0.73, translatey*-0.76)
                            scrolling_value[4][1] = map_range(transition_unit, 0, 10, 0.2, 0.45)
                            scrolling_value[4][2] = map_range(transition_unit, 0, 10, 0.2, 0.45)

                        
                            scrolling_value[5][0] = map_range(transition_unit, 0, 10, translatey*-0.73, translatey*-0.73)
                            scrolling_value[5][1] = map_range(transition_unit, 0, 10, 0.15, 0.2)
                            scrolling_value[5][2] = map_range(transition_unit, 0, 10, 0.15, 0.2)

                        
                            scrolling_value[6][0] = map_range(transition_unit, 0, 10, translatey*-0.73, translatey*-0.73)
                            scrolling_value[6][1] = map_range(transition_unit, 0, 10, 0, 0.15)
                            scrolling_value[6][2] = map_range(transition_unit, 0, 10, 0, 0.15)
                }
                scrolling(scrollpos,k)
    }

    function scrolling(scrollpos,k){
        console.log('hey')
                if(!zoomed_out){
                    for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
                        if(i>selected){
                            layer_pivot_array_cloned[i].position.y = -1*translatey*0.4
                        }else{
                            layer_pivot_array_cloned[i].position.y = translatey*0.4
                        }
                    }
                    for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
                        layer_pivot_array[i].visible = false
                    }
                    if(layer_pivot_array[k-2]){
                        layer_pivot_array[k-2].visible = true
                            layer_pivot_array[k-2].position.y = scrolling_value[0][0]
                            layer_pivot_array[k-2].scale.x = scrolling_value[0][1]
                            layer_pivot_array[k-2].scale.z = scrolling_value[0][2]
                        }

                    if(layer_pivot_array[k-1]){
                        layer_pivot_array[k-1].visible = true
                            layer_pivot_array[k-1].position.y = scrolling_value[1][0]
                            layer_pivot_array[k-1].scale.x = scrolling_value[1][1]
                            layer_pivot_array[k-1].scale.z = scrolling_value[1][2]
                        }

                    if(layer_pivot_array[k-0]){
                        layer_pivot_array[k-0].visible = true
                            layer_pivot_array[k-0].position.y = scrolling_value[2][0]
                            layer_pivot_array[k-0].scale.x = scrolling_value[2][1]
                            layer_pivot_array[k-0].scale.z = scrolling_value[2][2]
                        }

                    if(layer_pivot_array[k+1]){
                        layer_pivot_array[k+1].visible = true
                            layer_pivot_array[k+1].position.y = scrolling_value[3][0]
                            layer_pivot_array[k+1].scale.x = scrolling_value[3][1]
                            layer_pivot_array[k+1].scale.z = scrolling_value[3][2]
                        }

                    if(layer_pivot_array[k+2]){
                        layer_pivot_array[k+2].visible = true
                            layer_pivot_array[k+2].position.y = scrolling_value[4][0]
                            layer_pivot_array[k+2].scale.x = scrolling_value[4][1]
                            layer_pivot_array[k+2].scale.z = scrolling_value[4][2]
                        }

                    if(layer_pivot_array[k+3]){
                        layer_pivot_array[k+3].visible = true
                            layer_pivot_array[k+3].position.y = scrolling_value[5][0]
                            layer_pivot_array[k+3].scale.x = scrolling_value[5][1]
                            layer_pivot_array[k+3].scale.z = scrolling_value[5][2]
                        }

                    if(layer_pivot_array[k+4]){
                        layer_pivot_array[k+4].visible = true
                            layer_pivot_array[k+4].position.y = scrolling_value[6][0]
                            layer_pivot_array[k+4].scale.x = scrolling_value[6][1]
                            layer_pivot_array[k+4].scale.z = scrolling_value[6][2]
                        }
                }else{
                    for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
                        if(i>selected){
                            layer_pivot_array[i].position.y = -1*translatey*0.4
                        }else{
                            layer_pivot_array[i].position.y = translatey*0.4
                        }
                    }
                    for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
                        layer_pivot_array_cloned[i].visible = false
                    }
                    if(layer_pivot_array_cloned[k-2]){
                        layer_pivot_array_cloned[k-2].visible = true
                            layer_pivot_array_cloned[k-2].position.y = scrolling_value[0][0]
                            layer_pivot_array_cloned[k-2].scale.x = scrolling_value[0][1]
                            layer_pivot_array_cloned[k-2].scale.z = scrolling_value[0][2]
                        }

                    if(layer_pivot_array_cloned[k-1]){
                        layer_pivot_array_cloned[k-1].visible = true
                            layer_pivot_array_cloned[k-1].position.y = scrolling_value[1][0]
                            layer_pivot_array_cloned[k-1].scale.x = scrolling_value[1][1]
                            layer_pivot_array_cloned[k-1].scale.z = scrolling_value[1][2]
                        }

                    if(layer_pivot_array_cloned[k-0]){
                        layer_pivot_array_cloned[k-0].visible = true
                            layer_pivot_array_cloned[k-0].position.y = scrolling_value[2][0]
                            layer_pivot_array_cloned[k-0].scale.x = scrolling_value[2][1]
                            layer_pivot_array_cloned[k-0].scale.z = scrolling_value[2][2]
                        }

                    if(layer_pivot_array_cloned[k+1]){
                        layer_pivot_array_cloned[k+1].visible = true
                            layer_pivot_array_cloned[k+1].position.y = scrolling_value[3][0]
                            layer_pivot_array_cloned[k+1].scale.x = scrolling_value[3][1]
                            layer_pivot_array_cloned[k+1].scale.z = scrolling_value[3][2]
                        }

                    if(layer_pivot_array_cloned[k+2]){
                        layer_pivot_array_cloned[k+2].visible = true
                            layer_pivot_array_cloned[k+2].position.y = scrolling_value[4][0]
                            layer_pivot_array_cloned[k+2].scale.x = scrolling_value[4][1]
                            layer_pivot_array_cloned[k+2].scale.z = scrolling_value[4][2]
                        }

                    if(layer_pivot_array_cloned[k+3]){
                        layer_pivot_array_cloned[k+3].visible = true
                            layer_pivot_array_cloned[k+3].position.y = scrolling_value[5][0]
                            layer_pivot_array_cloned[k+3].scale.x = scrolling_value[5][1]
                            layer_pivot_array_cloned[k+3].scale.z = scrolling_value[5][2]
                        }

                    if(layer_pivot_array_cloned[k+4]){
                        layer_pivot_array_cloned[k+4].visible = true
                            layer_pivot_array_cloned[k+4].position.y = scrolling_value[6][0]
                            layer_pivot_array_cloned[k+4].scale.x = scrolling_value[6][1]
                            layer_pivot_array_cloned[k+4].scale.z = scrolling_value[6][2]
                        }
                }
                render()
    }
const views = [
    {
        left: 0,
        bottom: 0,
        width: 1,
        height: 1,
        eye: [ 0, 0, 6.5 ],
        fov: 95,
        init_eye: [ 0, 0, 6.5 ],
        init_fov: 95,
        shifted_eye: [ 0, 240, 300 ],
        shifted_fov: 10,
        lookAt :new THREE.Vector3( 0, 0, 0 )
    },
    {
        left: 0.01,
        bottom: 0.01,
        width: 0.4,
        height: 0.4,
        eye: [ 0, 240, 300+scene_dis ],
        fov: 10,
        init_eye: [ 0, 240, 300+scene_dis ],
        init_fov: 10,
        shifted_eye: [ 0, 0, 6.5+scene_dis ],
        shifted_fov: 95,
        lookAt :new THREE.Vector3( 0, 0, scene_dis )
    },
];
if(w<h){
    views[0].fov=125
}
$(document).click(function(e){
    console.log('hey')
    var x = e.clientX;
    var y = e.clientY;
    if(x>w - w * views[1].width - h * views[1].left && y<(h * views[1].bottom+h * views[1].height)){
        if(zoomed_out){
            zoom_in()
            return false
        }else{
            zoom_out()
            return false
        }
    }else{
        console.log(raycaster_obj_link[selected])
        if(raycaster_obj_link[selected]===''){

        }else{
            window.open(raycaster_obj_link[selected], '_blank').focus();
        }
    }
})
init()
function init(){

    $('.fake_scroll').append('<div class="view_hover"></div>')

    $('.view_hover').css({'left':Math.floor( w - w * views[1].width - h * views[1].left) +'px'})
    $('.view_hover').css({'top':Math.floor( h * views[1].bottom) +'px'})
    $('.view_hover').css({'width':Math.floor( w * views[1].width) +'px'})
    $('.view_hover').css({'height': Math.floor( h * views[1].height) +'px'})
console.log( w)
console.log(views[0].width)


    canvas = document.getElementById("canvas");




    renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvas } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000000 );//0x );

    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;




    for ( let ii = 0; ii < views.length; ++ ii ) {
        const view = views[ ii ];
        const camera = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
        // console.log(camera)
        view.camera = camera;
    }





    const near = 370;
    const far = 430;
    // const near = 10;
    // const far = 60;
    scene.fog = new THREE.Fog(0x000000, near, far);


                light1 = new THREE.SpotLight( 0x391fff );
                light1.position.set( 100, 10, 0 );
                light1.penumbra = 1;
                light1.distance = 200;
                light1.intensity = 0;
                light1.angle = Math.PI / 8;
                scene.add( light1 );

                light2 = new THREE.PointLight( 0xffffff );
                light2.position.set( 0, -15, 0 );
                light2.intensity =0;
                scene.add( light2 );

                whole_light = new THREE.AmbientLight( 0xffffff );
                whole_light.position.set( 0, 0, 0 );
                whole_light.intensity = 1.05;
                scene.add( whole_light );


    create_board()
}
function create_board(){
    for (var i = 0; i < layer_amount; i++) {
        layer_pivot_array[i] = new THREE.Group()
        whole_pivot.add(layer_pivot_array[i])
        plate_pivot_array[i] = Array(layer_amount-i+2)

        const texture = loader.load( "img/bg-"+pad(layer_amount-i, 2)+".png" );

        layer_material_array[i] = Array(plate_pivot_array[i].length)
        layer_material_array_cloned[i] = Array(plate_pivot_array[i].length)
                      raycaster_obj.push([])
                      raycaster_obj.push([])
                      raycaster_obj.push([])
        // layer_material_array[i].repeat.x = 1/(layer_amount+2)

            for (var k = 0; k < plate_pivot_array[i].length; k++) {
                const geometry = new THREE.PlaneGeometry(get_width(translatez,plate_pivot_array[i].length),translatey );
                geometry.faceVertexUvs[0][0][0].x = (plate_pivot_array[i].length-k+0)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][0][1].x = (plate_pivot_array[i].length-k+0)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][0][2].x = (plate_pivot_array[i].length-k-1)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][1][0].x = (plate_pivot_array[i].length-k+0)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][1][2].x = (plate_pivot_array[i].length-k-1)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][1][1].x = (plate_pivot_array[i].length-k-1)/(plate_pivot_array[i].length)
                // console.log(plate_pivot_array[i].length-k+0)

                layer_material_array[i][k] = new THREE.MeshPhongMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                layer_material_array_cloned[i][k] = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                // const material = new THREE.MeshBasicMaterial( {map: layer_material_array[i], side: THREE.DoubleSide, color:0xffffff} );
                const plate = new THREE.Mesh( geometry, layer_material_array[i][k] );
                      plate.position.z = translatez
                            if(plate_pivot_array[i].length%3==0){
                                if(k<Math.floor(plate_pivot_array[i].length/3)){
                                    raycaster_obj[raycaster_obj.length-1].push(plate)
                                }else if(k<Math.floor(plate_pivot_array[i].length/3)*2){
                                    raycaster_obj[raycaster_obj.length-2].push(plate)
                                }else{
                                    raycaster_obj[raycaster_obj.length-3].push(plate)
                                }
                              $(this).find('.text_inner_content').css({'width':33.333333 + '%'})
                            }else if(plate_pivot_array[i].length%3==1){
                                if(k<Math.floor(plate_pivot_array[i].length/3)){
                                    raycaster_obj[raycaster_obj.length-1].push(plate)
                                }else if(k<Math.floor(plate_pivot_array[i].length/3)*2+1){
                                    raycaster_obj[raycaster_obj.length-2].push(plate)
                                }else{
                                    raycaster_obj[raycaster_obj.length-3].push(plate)
                                }
                            }else{
                                if(k<Math.floor(plate_pivot_array[i].length/3)+0){
                                    raycaster_obj[raycaster_obj.length-1].push(plate)
                                }else if(k<Math.floor(plate_pivot_array[i].length/3)*2+1){
                                    raycaster_obj[raycaster_obj.length-2].push(plate)
                                }else{
                                    raycaster_obj[raycaster_obj.length-3].push(plate)
                                }
                            }

                const edges = new THREE.EdgesGeometry( geometry );
                const plate_line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                      plate_line.position.z = translatez

                plate_pivot_array[i][k] = new THREE.Group()
                plate_pivot_array[i][k].rotation.y = degrees_to_radians(360/(plate_pivot_array[i].length)*k)
                plate_pivot_array[i][k].add(plate)
                plate_pivot_array[i][k].add(plate_line)
                layer_pivot_array[i].add( plate_pivot_array[i][k] );

                if(k == (plate_pivot_array[i].length-1)&& i == (layer_amount-1)){
                    clone_board()
                }
            }
    }
}
function clone_board(){
                    whole_pivot_cloned = whole_pivot.clone()
                    whole_pivot_cloned.position.z = scene_dis

                    for (var m = whole_pivot_cloned.children.length - 1; m >= 0; m--) {

                        layer_pivot_array_cloned[m] = whole_pivot_cloned.children[m]
                        layer_pivot_array_cloned[m].scale.y = 1.2
                            layer_pivot_array_cloned[m].scale.x = get_rad(translatey,plate_pivot_array[m].length)/translatez
                            layer_pivot_array_cloned[m].scale.z = get_rad(translatey,plate_pivot_array[m].length)/translatez
                            // console.log(layer_pivot_array_cloned[m])
                            for (var i = layer_pivot_array_cloned[m].children.length - 1; i >= 0; i--) {
                                // layer_pivot_array_cloned[m].children[i].children[0].material = layer_material_array_cloned[m][i]
                            }
                            
                    }
                    scene.add( whole_pivot_cloned)
                    render()
                    setTimeout(function(){
                            render()},1000)

}
function render(){
                for ( let ii = 0; ii < views.length; ++ ii ) {

                    const view = views[ ii ];
                    const camera = view.camera;


                    const left = Math.floor( w - w * view.width - h * view.left );
                    const bottom = Math.floor( h * view.bottom );
                    const width = Math.floor( w * view.width );
                    const height = Math.floor( h * view.height );

                    renderer.setViewport( left, bottom, width, height );
                    renderer.setScissor( left, bottom, width, height );
                    renderer.setScissorTest( true );
                    renderer.setClearColor( view.background );

                    camera.aspect = width / height;
                    camera.lookAt(view.lookAt)
                    // console.log(view.fov)
                    camera.fov = view.fov
                    // console.log(view.eye)
                    camera.position.fromArray( view.eye );
                    // console.log(view.lookAt.position)
                    // console.log(view.lookAt)
                    // console.log(whole_pivot_cloned.position)
                    camera.updateProjectionMatrix();

                    renderer.render( scene, camera );
                    // console.log(scene)

                }
}
function easeInQuart(k){
    x = k/speed
    return x * x * x * x * speed;
}
function easeInQuad(k){
    x = k/speed
    return x * x * speed;
}
function easeOutQuint(k) {
    x = k/speed
    return (1 - Math.pow(1 - x, 5)) * speed;
}
function easeInCubic(k){
    x = k/speed
    return x * x * x * speed;
}

function easeOutSine(k) {
    x = k/speed
    return (Math.sin((x *  Math.PI) / 2))*speed;
}
function easeOutCubic(k) {
    x = k/speed
    return (1 - Math.pow(1 - x, 3))*speed;
}
function zooming(zoomed_out_counter){
    for ( let ii = 0; ii < views.length; ++ ii ) {
        const view = views[ ii ];
        if(ii == 0){
                view.eye[0] = map_range(easeInQuad(zoomed_out_counter),0,speed,view.init_eye[0],view.shifted_eye[0])
                view.eye[1] = map_range(easeInQuad(zoomed_out_counter),0,speed,view.init_eye[1],view.shifted_eye[1])
                view.eye[2] = map_range(easeInQuad(zoomed_out_counter),0,speed,view.init_eye[2],view.shifted_eye[2])
                view.fov = map_range(easeOutCubic(zoomed_out_counter),0,speed,view.init_fov,view.shifted_fov)
            }else{
                view.eye[0] = map_range(easeOutCubic(zoomed_out_counter),0,speed,view.init_eye[0],view.shifted_eye[0])
                view.eye[1] = map_range(easeOutCubic(zoomed_out_counter),0,speed,view.init_eye[1],view.shifted_eye[1])
                view.eye[2] = map_range(easeOutCubic(zoomed_out_counter),0,speed,view.init_eye[2],view.shifted_eye[2])
                view.fov = map_range(easeInQuad(zoomed_out_counter),0,speed,view.init_fov,view.shifted_fov)
            }
    }
    for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
        if(i>=selected-2 && i<= selected+4){
                layer_pivot_array[i].scale.x = map_range(zoomed_out_counter,0,speed,scrolling_value[i-(selected-2)][1],get_rad(translatey,plate_pivot_array[i].length)/translatez)
                layer_pivot_array[i].scale.y = map_range(zoomed_out_counter,0,speed,1,1.2)
                layer_pivot_array[i].scale.z = map_range(zoomed_out_counter,0,speed,scrolling_value[i-(selected-2)][1],get_rad(translatey,plate_pivot_array[i].length)/translatez)
            }else if(i>selected+4){
                layer_pivot_array[i].scale.x = map_range(zoomed_out_counter,0,speed,0,get_rad(translatey,plate_pivot_array[i].length)/translatez)
                layer_pivot_array[i].scale.y = map_range(zoomed_out_counter,0,speed,1,1.2)
                layer_pivot_array[i].scale.z = map_range(zoomed_out_counter,0,speed,0,get_rad(translatey,plate_pivot_array[i].length)/translatez)
            }else{
                layer_pivot_array[i].scale.x = map_range(zoomed_out_counter,0,speed,5+(i-(selected+4)*0.1),get_rad(translatey,plate_pivot_array[i].length)/translatez)
                layer_pivot_array[i].scale.y = map_range(zoomed_out_counter,0,speed,1,1.2)
                layer_pivot_array[i].scale.z = map_range(zoomed_out_counter,0,speed,5+(i-(selected+4)*0.1),get_rad(translatey,plate_pivot_array[i].length)/translatez)
            }
            if(zoomed_out){
                if(i>selected){
                    layer_pivot_array[i].position.y = -1*translatey*0.4
                }else{
                    layer_pivot_array[i].position.y = translatey*0.4
                }
            }else{
                if(i>selected){
                    layer_pivot_array_cloned[i].position.y = -1*translatey*0.4
                }else{
                    layer_pivot_array_cloned[i].position.y = translatey*0.4
                }
            }
    }
    for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
        if(i == selected-2){
            if(zoomed_out){
                layer_pivot_array_cloned[i].visible = true
            }else{
                layer_pivot_array[i].visible = true
            }
                layer_pivot_array_cloned[i].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-2].length)/translatez,scrolling_value[0][1])
                layer_pivot_array_cloned[i].scale.y = map_range(zoomed_out_counter,0,speed,1.2, 1)
                layer_pivot_array_cloned[i].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-2].length)/translatez,scrolling_value[0][2])
                if(zoomed_out){
                    if(i>selected){
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[0][0])
                    }else{
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[0][0])
                    }
                }else{
                    if(i>selected){
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[0][0])
                    }else{
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[0][0])
                    }
                }
            }

        else if(i == selected-1){
            if(zoomed_out){
                layer_pivot_array_cloned[selected-1].visible = true
            }else{
                layer_pivot_array[selected-1].visible = true
            }
                layer_pivot_array_cloned[selected-1].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-1].length)/translatez,scrolling_value[1][1])
                layer_pivot_array_cloned[selected-1].scale.y = map_range(zoomed_out_counter,0,speed,1.2, 1)
                layer_pivot_array_cloned[selected-1].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-1].length)/translatez,scrolling_value[1][2])
                if(zoomed_out){
                    if(i>selected){
                        layer_pivot_array_cloned[selected-1].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[1][0])
                    }else{
                        layer_pivot_array_cloned[selected-1].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[1][0])
                    }
                }else{
                    if(i>selected){
                        layer_pivot_array[selected-1].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[1][0])
                    }else{
                        layer_pivot_array[selected-1].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[1][0])
                    }

                }
            }

        else if(i == selected-0){
            if(zoomed_out){
                layer_pivot_array_cloned[selected-0].visible = true
            }else{
                layer_pivot_array[selected-0].visible = true
            }
                layer_pivot_array_cloned[selected-0].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-0].length)/translatez,scrolling_value[2][1])
                layer_pivot_array_cloned[selected-0].scale.y = map_range(zoomed_out_counter,0,speed,1.2, 1)
                layer_pivot_array_cloned[selected-0].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-0].length)/translatez,scrolling_value[2][2])
                if(zoomed_out){
                    if(i>selected){
                        layer_pivot_array_cloned[selected-0].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[2][0])
                    }else{
                        layer_pivot_array_cloned[selected-0].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[2][0])
                    }
                }else{
                    if(i>selected){
                        layer_pivot_array[selected-0].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[2][0])
                    }else{
                        layer_pivot_array[selected-0].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[2][0])
                    }

                }
            }

        else if(i == selected+1){
            if(zoomed_out){
                layer_pivot_array_cloned[selected+1].visible = true
            }else{
                layer_pivot_array[selected+1].visible = true
            }
                layer_pivot_array_cloned[selected+1].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+1].length)/translatez,scrolling_value[3][1])
                layer_pivot_array_cloned[selected+1].scale.y = map_range(zoomed_out_counter,0,speed,1.2, 1)
                layer_pivot_array_cloned[selected+1].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+1].length)/translatez,scrolling_value[3][2])
                if(zoomed_out){
                    if(i>selected){
                        layer_pivot_array_cloned[selected+1].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[3][0])
                    }else{
                        layer_pivot_array_cloned[selected+1].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[3][0])
                    }
                }else{
                    if(i>selected){
                        layer_pivot_array[selected+1].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[3][0])
                    }else{
                        layer_pivot_array[selected+1].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[3][0])
                    }

                }
            }

        else if(i == selected+2){
            if(zoomed_out){
                layer_pivot_array_cloned[selected+2].visible = true
            }else{
                layer_pivot_array[selected+2].visible = true
            }
                layer_pivot_array_cloned[selected+2].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+2].length)/translatez,scrolling_value[4][1])
                layer_pivot_array_cloned[selected+2].scale.y = map_range(zoomed_out_counter,0,speed,1.2, 1)
                layer_pivot_array_cloned[selected+2].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+2].length)/translatez,scrolling_value[4][2])
                if(zoomed_out){
                    if(i>selected){
                        layer_pivot_array_cloned[selected+2].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[4][0])
                    }else{
                        layer_pivot_array_cloned[selected+2].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[4][0])
                    }
                }else{
                    if(i>selected){
                        layer_pivot_array[selected+2].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[4][0])
                    }else{
                        layer_pivot_array[selected+2].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[4][0])
                    }

                }
            }

        else if(i == selected+3){
            if(zoomed_out){
                layer_pivot_array_cloned[selected+3].visible = true
            }else{
                layer_pivot_array[selected+3].visible = true
            }
                layer_pivot_array_cloned[selected+3].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+3].length)/translatez,scrolling_value[5][1])
                layer_pivot_array_cloned[selected+3].scale.y = map_range(zoomed_out_counter,0,speed,1.2, 1)
                layer_pivot_array_cloned[selected+3].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+3].length)/translatez,scrolling_value[5][2])
                if(zoomed_out){
                    if(i>selected){
                        layer_pivot_array_cloned[selected+3].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[5][0])
                    }else{
                        layer_pivot_array_cloned[selected+3].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[5][0])
                    }
                }else{
                    if(i>selected){
                        layer_pivot_array[selected+3].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[5][0])
                    }else{
                        layer_pivot_array[selected+3].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[5][0])
                    }

                }
            }

        else if(i == selected+4){
            if(zoomed_out){
                layer_pivot_array_cloned[selected+4].visible = true
            }else{
                layer_pivot_array[selected+4].visible = true
            }
                layer_pivot_array_cloned[selected+4].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+4].length)/translatez,scrolling_value[6][1])
                layer_pivot_array_cloned[selected+4].scale.y = map_range(zoomed_out_counter,0,speed,1.2, 1)
                layer_pivot_array_cloned[selected+4].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+4].length)/translatez,scrolling_value[6][2])
                if(zoomed_out){
                    if(i>selected){
                        layer_pivot_array_cloned[selected+4].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[6][0])
                    }else{
                        layer_pivot_array_cloned[selected+4].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[6][0])
                    }
                }else{
                    if(i>selected){
                        layer_pivot_array[selected+4].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[6][0])
                    }else{
                        layer_pivot_array[selected+4].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[6][0])
                    }

                }
            }
            else if(i>selected+4){
                layer_pivot_array_cloned[i].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,0)
                layer_pivot_array_cloned[i].scale.y = map_range(zoomed_out_counter,0,speed,1.2,1)
                layer_pivot_array_cloned[i].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,0)
                if(zoomed_out){
                    layer_pivot_array_cloned[i].position.y = -1*translatey*1}
                    else{
                        layer_pivot_array[i].position.y = -1*translatey*1
                    }
            }
            else if(i<selected-2){
                layer_pivot_array_cloned[i].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,5+(i-(selected+4)*0.1))
                layer_pivot_array_cloned[i].scale.y = map_range(zoomed_out_counter,0,speed,1.2,1)
                layer_pivot_array_cloned[i].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,5+(i-(selected+4)*0.1))
                if(zoomed_out){
                    layer_pivot_array_cloned[i].position.y = translatey*2}
                    else{
                        layer_pivot_array[i].position.y = translatey*2
                    }
            }
    }

}
function zoom_out(){

    zoomed_out = true
    zoomed_out_counter ++ 


    light1.intensity = 4;
    whole_light.position.set( 10, 1, 0 );

    ///mainview zoomout
    if(zoomed_out_counter == 1){
        for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
            layer_pivot_array[i].visible = true
        }
    }
    ///sideview zoomin
    if(zoomed_out_counter == speed){
        for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
            layer_pivot_array_cloned[i].visible = false
        }
    }
    if(zoomed_out_counter<=speed){
        setTimeout(function(){
            zoom_out()
        },1)
    }else{
            scrollpos = $(window).scrollTop();
                get_scrolling_value(scrollpos,selected)
    }
    zooming(zoomed_out_counter)  
    render()

}

function zoom_in(){

    zoomed_out = false
    zoomed_out_counter --



                light1.intensity = 0;
                whole_light.position.set( 0, 0, 0 );

    ///mainview zoomout
    if(zoomed_out_counter == 1){
        for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
            layer_pivot_array[i].visible = false
        }
    }
    ///sideview zoomin
    if(zoomed_out_counter == speed){
        for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
            layer_pivot_array_cloned[i].visible = true
        }
    }
    if(zoomed_out_counter>0){
        setTimeout(function(){
            zoom_in()
        },1)
    }else{
            scrollpos = $(window).scrollTop();
                get_scrolling_value(scrollpos,selected)
    }
    zooming(zoomed_out_counter)  
    render()
}

// window.addEventListener( 'resize', function () {
//   camera1.aspect = window.innerWidth / window.innerHeight;
//   camera1.updateProjectionMatrix();
//   renderer.setSize( window.innerWidth, window.innerHeight );
// }, false );






var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var selected = 0

$('canvas').mousemove(function(){
    event.preventDefault();
            // console.log(raycaster_obj)

    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, views[0].camera );
    for (var i = 0; i <  raycaster_obj.length; i++) {
        var intersects = raycaster.intersectObjects(raycaster_obj[i]); 
        if ( intersects.length > 0 ) {
            selected = i
            hover(selected)
            return false
        }
    }


})
function hover(selected){
    for (var i = 0; i <  raycaster_obj.length; i++) {
            for (var k = raycaster_obj[i].length - 1; k >= 0; k--) {
                raycaster_obj[i][k].material.color = new THREE.Color(0xFFFFFF)
            }
    }
            for (var k = raycaster_obj[selected].length - 1; k >= 0; k--) {
                raycaster_obj[selected][k].material.color = new THREE.Color(0x199b82)
            }
            render()

}

                            // if(cellamount%3==0){
                            //   $(this).find('.text_inner_content').css({'width':33.333333 + '%'})
                            // }else if(cellamount%3==1){
                            //   $(this).find('.text_inner_content_1').css({'width':100/cellamount*Math.floor(cellamount/3) + '%'})
                            //   $(this).find('.text_inner_content_2').css({'width':100/cellamount*Math.floor(cellamount/3)+100/cellamount + '%'})
                            //   $(this).find('.text_inner_content_3').css({'width':100/cellamount*Math.floor(cellamount/3) + '%'})
                            // }else{
                            //   $(this).find('.text_inner_content_1').css({'width':100/cellamount*Math.floor(cellamount/3)+100/cellamount + '%'})
                            //   $(this).find('.text_inner_content_2').css({'width':100/cellamount*Math.floor(cellamount/3)+100/cellamount + '%'})
                            //   $(this).find('.text_inner_content_3').css({'width':100/cellamount*Math.floor(cellamount/3) + '%'})
                            // }



timeplay()
function timeplay(){
    document.title = String(new Date()).substring(4).split(' GMT')[0]
    setTimeout(function(){timeplay()},1000)
}
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(2021, 10, 19);
}


    function map_range(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function get_width(translatez,number_of_board){
        return translatez*Math.tan((360/(number_of_board*2)) * Math.PI / 180)   *2
    }

    function get_rad(width,number_of_board){
        return (width/2)/Math.tan((360/(number_of_board*2)) * Math.PI / 180)
    }

    function degrees_to_radians(degrees){
        var pi = Math.PI;
        return degrees * (pi/180);
    }
})

