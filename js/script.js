
$(document).ready(function(){

var db = [
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../thumbnails/y5.jpeg)\"></div><span class=\"quote\">AHMET ÖĞÜT, SILENT UNIVERSITY </span>",
            "https://bienal.iksv.org/en/news/kunstverein-in-hamburg-and-the-17th-istanbul-biennial-announces-the-silent-university-orientation-programme",
            "Silent University announcement on the Istanbul Biennial website"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-58.png)\"></div><span class=\"quote\">YEHWAN SONG</span>",
            "https://yhsong.com/",
            "Yehwan Song, Very responsive, 2020"
        ],
        [
            "The Silent University is a solidarity based knowledge exchange platform by displaced people and forced migrants. It is led by a group of lecturers, consultants and research fellows. It is an education platform outside of the restrictions of migration laws, language limitations and the other bureaucratic obstacles.<span class=\"quote\">AHMET ÖĞÜT, SILENT UNIVERSITY </span>",
            "http://thesilentuniversity.org/",
            "From the Silent University website 'http://thesilentuniversity.org/'"
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../thumbnails/y5.jpeg)\"></div><span class=\"quote\">AHMET ÖĞÜT, SILENT UNIVERSITY </span>",
            "https://www.youtube.com/watch?v=MuvFU6cwatk&ab_channel=Visible",
            "         From her interview in Idea Magazine, 2009 https://blog.saltonline.org/post/95367715734/the-bold-and-poignant-palette-of-gulsun-karamustafa "
        ],
        [
            "The Silent University aims to address and reactivate the knowledge of the participants and make the exchange process mutually beneficial by inventing alternative currencies, in place of money or free voluntary service. The Silent University’s aim is to challenge the idea of silence as a passive state, and explore its powerful potential through performance, writing, and group reflection. These explorations attempt to make apparent the systemic failure and the loss of skills and knowledge experienced through the silencing process of people seeking asylum.<span class=\"quote\">AHMET ÖĞÜT, SILENT UNIVERSITY</span>",
            "http://thesilentuniversity.org/",
            "From the Silent University website 'http://thesilentuniversity.org/'"
        ],
        [
            "The Silent University aims to address and reactivate the knowledge of the participants and make the exchange process mutually beneficial by inventing alternative currencies, in place of money or free voluntary service. The Silent University’s aim is to challenge the idea of silence as a passive state, and explore its powerful potential through performance, writing, and group reflection. These explorations attempt to make apparent the systemic failure and the loss of skills and knowledge experienced through the silencing process of people seeking asylum.<span class=\"quote\">AHMET ÖĞÜT, SILENT UNIVERSITY</span>",
            "http://thesilentuniversity.org/",
            "From the Silent University website 'http://thesilentuniversity.org/'"
        ]
    ],
    [
        [
            "Even though you set detailed and obvious criteria, the sorted data can be very generative and unexpected. It’s why I love playing with it, because even though I focus on the content, the results are always fluid and surprising. Data is more like a living creature, what it reveals and manifests itself as is very generative and unpredictable<span class=\"quote\">YEHWAN SONG</span>",
            "https://www.itsnicethat.com/features/ones-to-watch-2020-yehwan-song-digital-240220",
            "From interview titled “Yehwan Song wants to radically change how people think about the web” by Charlie Filmer-Court, 24/2/2020",
            "sep_200-2"
        ],
        [
            "insan ısırır<br>akıldan koparır kendini<span class=\"quote\">POETRY CHANNEL</span>",
            null,
            "Part of a poem by Gonca Özmen titled Auto-Destruction",
            "sep_300"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-64.jpeg)\"></div><span class=\"quote\">MARIAH LOOKMAN</span>",
            "https://www.youtube.com/watch?v=F_7f14NkOyU&ab_channel=Relax24",
            "11 hours of Garden Sounds by Relax24",
            "sep_vid-2"
        ]
    ],
    [
        [
            " Peki diyelim ve herkes kendi genişliğine sığsın<span class=\"quote\">POETRY CHANNEL</span>",
            null,
            "Part of a poem by Gonca Özmen titled Auto-Destruction",
            "sep_100"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-65.png)\"></div><span class=\"quote\">MARIAH LOOKMAN</span>",
            "https://youtube.com/watch?v=NA_1U8xYlJM",
            "From her project proposal for the 17th Istanbul Biennial",
            "sep_img-3"
        ],
        [
            "yanılmıyoruz bu benim takma ağzım<br>gerçeğinin içinde dilim tuhaf bir eşya gibi.<span class=\"quote\">POETRY CHANNEL</span>",
            null,
            "Part of a poem by Sevinç Çalhanoğlu titled niyet",
            "sep_200-2"
        ]
    ],
    [
        [
            "“I imagine the garden to be a place of rest, rejuvenation, respite and affirmation in the basic principles of life that things grow, age and decay.”<span class=\"quote\">MARIAH LOOKMAN</span>",
            null,
            " From her project proposal for the 17th Istanbul Biennial ",
            "sep_200-2"
        ],
        [
            "<br><br>Defterlerin birinde buluyorum yıllar önce ayrıldığımız yeri<br>Yalnızca çizgileri kalmış o ânın<span class=\"quote\">POETRY CHANNEL</span>",
            null,
            "Part of a poem by Mehmet Erte titled Yeniden Yaşanmayacak",
            "sep_300"
        ],
        [
            "By working with the underlying logic of the Bostans of Istanbul-The Urban cultivation of medicinal plants can be explored as a way of preserving ancient knowledge of the healing properties of medicinal plants.<span class=\"quote\">MARIAH LOOKMAN</span>",
            null,
            "From her project proposal for the 17th Istanbul Biennial",
            "sep_200-2"
        ]
    ],
    [
        [
            "Art needs to update its own techniques as fast as the industry or politics in order to be able to respond to all of this, to produce something about these social codes or to say something about the historical field.<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4",
            "From his interview with Digilogue, 02/01/2020",
            "sep_700-1 "
        ],
        [
            "Of course art is something to enjoy, but the content is not always enjoyable. But we have to talk about these tragedies and traumas and catastrophes — they are important subjects of art.<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.bupipedream.com/ac/113521/mutant-space-utilizes-interactive-technology-to-highlight-nuclear-radiation/",
            "Interview with Netali Zaff, 3/11/2020",
            "sep_200-1"
        ],
        [
            "I think contemporary art is the only venue that can really host freedom of speech and critical thinking,<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.bupipedream.com/ac/113521/mutant-space-utilizes-interactive-technology-to-highlight-nuclear-radiation/",
            "Interview with Netali Zaff, 3/11/2020",
            "sep_100"
        ]
    ],
    [
        [
            "It’s been more than 10 years, and I sometimes still get emotional about how this whole nuclear history is so prevalent in many places in the world and still not spoken about.<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.bupipedream.com/ac/113521/mutant-space-utilizes-interactive-technology-to-highlight-nuclear-radiation/",
            "Interview with Netali Zaff, 3/11/2020",
            "sep_200-2"
        ],
        [
            "Art needs to dominate the means of production that industry dominates.<span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4",
            "From his interview with Digilogue, 02/01/2020",
            "sep_30-1"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-66.jpg)\"></div><span class=\"quote\">ATIF AKIN, MUTANT TIME</span>",
            "https://www.youtube.com/watch?v=L5v-8Q4xGH4",
            "Atıf Akın interview Digilogue, 02/01/2020",
            "sep_img-1"
        ]
    ],
    [
        [
            "What can we learn from this kind of seeing of different landscapes? Are the traces we are pursuing to be found outside or inside this sensory system? Are they filled with cultural and cosmic points that activate our human memory when we go for a walk there? Is a magnetic and magic property of a landscape earthy, and are the sensations of our molecular, cell-like perception similar for all living beings within the same environment? How do we see landscape, which guides our way of seeing with its cosmological properties? What scaling, what dynamics of visual representation contain what knowledge? What contemporary history and what social organization of matri-linear society intersect today with the ecological knowledge of the land?<span class=\"quote\"> NGELA FERREIRA </span>",
            "http://www.tdgn.at/matri-linear-b-april-2020/?lang=en",
            "from the Dissident Godesses Network on Matri Linear B / April 2020",
            "sep_900"
        ],
        [
            "Looking for embodied relations and connections in the making of visual cine(so)matic recordings of field and landscape. How do conditions of memory and knowledge scale view, form a process of storytelling, and how are potential matrilineal connections linking to Earth histories?<span class=\"quote\"> NGELA FERREIRA </span>",
            "https://13thgwangjubiennale.org/participants",
            "from the 13th Gwangju Biennale’s website on Matri Linear B ",
            "sep_300"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-67.jpeg)\"></div><span class=\"quote\"> NGELA FERREIRA </span>",
            "https://vimeo.com/409744230",
            "Angela Melitopoulos, Research Files Matri Linear B, 2020",
            "sep_vid-3"
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-68.jpeg)\"></div><span class=\"quote\"> NGELA FERREIRA </span>",
            "https://vimeo.com/112702701",
            "Angela Melitopoulos, Art of Being Many 1. Gezi, 2014",
            "sep_vid-2"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-69.jpg)\"></div><span class=\"quote\">PELIN TAN, STATE OF DISPLACEMENT: ENTANGLED TOPOGRAPHIES </span>",
            "https://www.cca.qc.ca/en/events/59715/pelin-tan-decolonizing-architecture-education",
            "Pelin Tan: Decolonizing Architecture Education<br>Toolkit for Today: Activisms, CCA",
            "sep_img-1"
        ],
        [
            "<br>Care Labor / Bakım (Onarma) Emeği / Sereguhî Ked<br>Common Space / Müşterek Mekân / Hevbeş Der<br>Collective Field / Kolektif Saha / Herewez Zevî<br>Territory / Mekân, Arazi / Cih, War<br>Female Labor / Kadın Emeği / Ked e Jinê<br>Colonization/Decolonization / Sömürgeleştirme, Sömürgesizleştirme / Bêwar Kirin<br>Solidarity / Dayanışma / Hevkarî<br><span class=\"quote\"><br><br>PELIN TAN, STATE OF DISPLACEMENT: ENTANGLED TOPOGRAPHIES</span>",
            "",
            "From the “State of Displacement: Entangled Topographies” project proposal",
            "sep_500"
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-70.png)\"></div><span class=\"quote\">PELIN TAN, STATE OF DISPLACEMENT: ENTANGLED TOPOGRAPHIES </span>",
            "",
            "Pelin Tan, Tigris Phenomenologies, 2021",
            "sep_img-1"
        ],
        [
            "It is by micro-political acting that we want to participate in making the city more ecological and more democratic, to make the space of proximity less dependent on top-down processes and more accessible to its users. The ‘self-managed architecture’ is an architecture of relationships, processes and agencies of persons, desires, skills and know-hows. Such an architecture does not correspond to a liberal practice but asks for new forms of association and collaboration, based on exchange and reciprocity and involving all those interested (individuals, organisations, institutions), whatever is their scale.<span class=\"quote\">ATELIER D’ARCHITECTURE AUTOGEREE</span>",
            "https://www.urbantactics.org/about/",
            "from the website https://www.urbantactics.org/about/",
            "sep_900"
        ],
        [
            "Our architecture is at the same time political and poetic as it aims above all to ‘create relationships between worlds<span class=\"quote\">ATELIER D’ARCHITECTURE AUTOGEREE</span>",
            "https://www.urbantactics.org/about/",
            "from the website https://www.urbantactics.org/about/",
            "sep_200-1"
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-71.jpeg)\"></div><span class=\"quote\">ATELIER D’ARCHITECTURE AUTOGEREE</span>",
            "https://vimeo.com/111579324",
            "Interview of Atelier d'Architecture Autogérée by Curry Stone Design Prize, 2011",
            "sep_vid-1"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-72.png)\"></div><span class=\"quote\">ATELIER D’ARCHITECTURE AUTOGEREE</span>",
            "",
            "Mock-up of La Folie Verte – Ecological Factory for a 21st Century Park",
            "sep_img-1"
        ],
        [
            "The Microbial Ethnography Lab will allow us to create a collective environment in which such microbial systems can be created by bringing together different points of view, different material systems and interpretations. We are interested in extending the concept of ethnography into the microbial domain by considering the role of the biological systems as they become part of the interpretation (of events) and participate in the preservation, transformation and the remediation of materials inside the vessels.<span class=\"quote\">ORKAN TELHAN</span>",
            "",
            "From his project proposal for the 17th Istanbul Biennial",
            "sep_900"
        ]
    ],
    [
        [
            "Materials and artefacts gain different political agencies during different historical moments in Istanbul.<span class=\"quote\">ORKAN TELHAN</span>",
            "",
            "From his project proposal for the 17th Istanbul Biennial",
            "sep_200-1"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-73.png)\"></div><span class=\"quote\">ORKAN TELHAN</span>",
            "",
            "Scan from the “Designs for Different Futures” catalogue, 2019",
            "sep_img-2"
        ],
        [
            "Motherhood as an “annex” to women-<br><br>How do women respond in different ways to their own motherhood experience and how do they stand against motherhood as an identity and as a role? How do their production and reproduction affect each other?<span class=\"quote\">ODA PROJESI, ANNE(X)</span>",
            "",
            "From their project proposal for the 17th Istanbul Biennial",
            "sep_300"
        ],
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../photos/image-74.png)\"></div><span class=\"quote\">ODA PROJESI, ANNE(X)</span>",
            "",
            "ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.",
           "sep_img-3"
        ],
        [
            "<span class=\"quote\"></span>",
            "",
            "",
            ""
        ],
        [
            "<span class=\"quote\"></span>",
            "",
            "",
            ""
        ]
    ],
    [
        [
            "<span class=\"quote\">artistname-------</span>",
            "",
            "",
            ""
        ],
        [
            "<span class=\"quote\">artistname-------</span>",
            "",
            "",
            ""
        ],
        [
            "<span class=\"quote\">artistname-------</span>",
            "",
            "",
            ""
        ]
    ],
    [
        [
            "<span class=\"quote\">artistname-------</span>",
            "",
            "",
            ""
        ],
        [
            "<span class=\"quote\">artistname-------</span>",
            "",
            "",
            ""
        ],
        [
            "<span class=\"quote\">artistname-------</span>",
            "",
            "",
            ""
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../thumbnails/y18.jpeg)\"></div><span class=\"quote\">artistname-------</span>",
            "https://youtube.com/watch?v=LfmUouW1ZuA",
            "from -------------",
            "sep_vid-3"
        ],
        [
            "“It is by micro-political acting that we want to participate in making the city more ecological and more democratic, to make the space of proximity less dependent on top-down processes and more accessible to its users. The ‘self-managed architecture’ is an architecture of relationships, processes and agencies of persons, desires, skills and know-hows. Such an architecture does not correspond to a liberal practice but asks for new forms of association and collaboration, based on exchange and reciprocity and involving all those interested (individuals, organisations, institutions), whatever is their scale.”<span class=\"quote\">        ATELIER D’ARCHITECTURE AUTOGEREE </span>",
            "         https://www.urbantactics.org/about/ ",
            "         from their website https://www.urbantactics.org/about/ ",
            "sep_700-1"
        ],
        [
            "<div class=\"sep_img_inner\" style = \"background-image:url( ../photos/image-61.jpg)\"></div><span class=\"quote\">artistname-------</span>",
            null,
            "Screenshot from Sriwhana Spong’s a hook but no fish 2017, film still. Courtesy of the artist and Michael Lett",
            "sep_img-3"
        ]
    ],
    [
        [
            "<div class=\"sep_img_inner\" style = \"background-image:url( ../photos/image-24.jpg)\"></div><span class=\"quote\">artistname-------</span>",
            null,
            "Fernando Garcia Dory, Monologue ",
            "sep_img-1"
        ],
        [
            "“It's not about this mangrove moving perfectly, it's about all of us coming together and obsessing about this machine, for months. It's about a way of thinking. If we talk about all these issues; we need to come together — it's not one person that's gonna save the world. <span class=\"quote\">        MARTHA ATIENZA </span>",
            "         https://www.adobomagazine.com/the-magazine/martha-atienzas-equation-of-state-using-video-art-and-island-technology-to-illuminate-the-effects-of-climate-change-in-bantayan-islands-coastal-communities-and-the-importan/ (1:00-1:22) ",
            "         From her interview with Adobo Magazine https://www.adobomagazine.com/the-magazine/martha-atienzas-equation-of-state-using-video-art-and-island-technology-to-illuminate-the-effects-of-climate-change-in-bantayan-islands-coastal-communities-and-the-importan/ (1:00-1:22) ",
            "sep_300"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../thumbnails/y2.jpeg)\"></div><span class=\"quote\">artistname-------</span>",
            "https://youtube.com/watch?v=kNaxM_L5GOg",
            "from -------------",
            "sep_vid-2"
        ]
    ],
    [
        [
            "“Our architecture is at the same time political and poetic as it aims above all to ‘create relationships between worlds’.”<span class=\"quote\">         ATELIER D’ARCHITECTURE AUTOGEREE </span>",
            "         https://www.urbantactics.org/about/ ",
            "         from their website https://www.urbantactics.org/about/ ",
            "sep_100"
        ],
        [
            "<div class=\"sep_img_inner\" style = \"background-image:url( ../photos/image-59.png)\"></div><span class=\"quote\">artistname-------</span>",
            null,
            "Yehwan Song, Very responsive, 2020",
            "sep_img-3"
        ],
        [
            "<div class=\"sep_img_inner sep_img_inner_0 sep_img_inner_whole_0\" style = \"background-image:url( ../thumbnails/y27.jpeg)\"></div><span class=\"quote\">artistname-------</span>",
            "https://youtube.com/watch?v=upwfIEYmFBw",
            "from -------------",
            "sep_vid-1"
        ]
    ]
]




for (var i = 0; i <13; i++) {
    for (var j = 0; j < db[i].length ; j++) {

        if(db[i][j][0].split('url(').length>1){
            source = '<img src='+db[i][j][0].split('url(')[1].split(')')[0]+'>'
        }else{
            source = '<div class="content_credit">'+db[i][j][0].split('<span class=\"quote\">')[0]+'</div>'
        }
        artist = db[i][j][0].split('<span class=\"quote\">')[1].split('</span>')[0]
        if(db[i][j][2].split('http').length>1){
                credit = db[i][j][2].split('http')[0]+'<a href="'+('http'+db[i][j][2].split('http')[1])+'">'+'http'+db[i][j][2].split('http')[1]+'</a>'
            }else{
                credit = db[i][j][2]
            }
    $('.credit_wrapper').append('<div class="source_credit">'+source+'<span class="artist_credit">'+artist+'</span><span class="credit_credit">'+credit+'</span></div>')
    }
}








    var inittime_h = new Date().toString().split(' ')[4].split(':')[0]
    var initrotation = inittime_h/24
    console.log(initrotation)
    var timeoffset = 0


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
    whole_pivot_cloned.visible = false
    console.log(scene)

    var translatey = 15
    var translatez = 10
    var staying = 5
    var zoomed_out = false
    var zoomed_out_counter = 0
    var canvas , renderer , whole_light
    var selected = 0
    var hovered = 0
    const loader = new THREE.TextureLoader();

    var credit_on = false

    var scene_dis = 100000
    var scrolldirection_value = 0
    var scrolling_value = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    var light1_value = [0,4.5]
    var light2_value = [0,0.15]
    var whole_light_value = [1,0.5]

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
    var scroll_speed = 1
    if(window.innerWidth<window.innerHeight*0.9){
        scroll_speed = 10
        console.log('hey')
    }

        var scrollpos = 10
    var w = $("body").prop("clientWidth");
    var h = window.innerHeight
    $('.fake_scroll').css({'height':((12)*translatey*h)+'px'})

    $('.fake_scroll_wrapper').scrollTop(2*translatey*h*initrotation)
    if(window.location.hash && window.location.hash.split('#')[1] === 'URSULA-BIEMANN') {
        $('.fake_scroll_wrapper').scrollTop((translatey*h)*(5))
    }
    if(window.location.hash && window.location.hash.split('#')[1] === '// LAURA-ANDERSON-BARBATA') {
        $('.fake_scroll_wrapper').scrollTop((translatey*h)*(8))
    }
        scene.add(whole_pivot)
var scrollcounter = 0

    $('.fake_scroll_wrapper').scroll(function (event) {
        scrollcounter++
        if(scrollcounter>10){
                $('.scrolldown').hide()}
            scrollpos = $('.fake_scroll_wrapper').scrollTop()+1+timeoffset;
        var k = Math.floor(scrollpos/(translatey*h)) 
        selected = k

                if(scrollpos > scrolldirection_value){
                    scrolldirection = 'down'
                }else{
                    scrolldirection = 'up'
                }
                scrolldirection_value = scrollpos

                whole_pivot_cloned.rotation.y = degrees_to_radians(scroll_speed*scrollpos%(translatey*h)/(translatey*h)*360)
                whole_pivot.rotation.y = degrees_to_radians(scroll_speed*scrollpos%(translatey*h)/(translatey*h)*360)

                get_scrolling_value(scrollpos,k,false)


    });
    function get_scrolling_value(scrollpos,k,auto){
                var transition_unit = 0
                if(scrollpos%(translatey*h) < (staying*h)){
                    // console.log('1')
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
                    // console.log('2')
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
                scrolling(scrollpos,k,auto)
    }

    function scrolling(scrollpos,k,auto){
        hover()
        // console.log('---------------'+scrollpos+'---------------'+k+'---------------'+(selected))
                if(!zoomed_out){
                    for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
                        if(i>selected){
                            if(i>(layer_pivot_array_cloned.length-10)){
                                layer_pivot_array_cloned[i].position.y = -1*translatey*0.4-1*translatey*0.0000175*((i-selected)*(i-selected)*(i-selected)*(i-selected))
                            }
                        }else{
                            layer_pivot_array_cloned[i].position.y = translatey*0.4
                        }
                    }
                    for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
                        if(!auto){layer_pivot_array[i].visible = false}
                        layer_pivot_array_cloned[i].visible = true
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
                            if(i>(layer_pivot_array.length-10)){
                                layer_pivot_array[i].position.y = -1*translatey*0.4-1*translatey*0.0000175*((i-selected)*(i-selected)*(i-selected)*(i-selected))
                            }
                        }else{
                            layer_pivot_array[i].position.y = translatey*0.4
                            // layer_pivot_array[i].scale.x = 1.1 
                            // layer_pivot_array[i].scale.z = 1.1 
                        }
                        // if(i==layer_pivot_array.length-3){
                        //     layer_pivot_array[i].position.y = -1*translatey*0.4-10
                        // }
                        // if(i==layer_pivot_array.length-2){
                        //     layer_pivot_array_cloned[i].position.y = -1*translatey*0.4-10
                        // }
                        // if(i==layer_pivot_array.length-1){
                        //     layer_pivot_array[i].position.y = -1*translatey*0.4-10
                        // }
                    }
                    for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
                        if(!auto){layer_pivot_array_cloned[i].visible = false}
                        layer_pivot_array[i].visible = true
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
        eye: [ 0, 0, 4.5 ],
        fov: 110,
        init_eye: [ 0, 0, 4.5 ],
        init_fov: 110,
        shifted_eye: [ 0, 250, 250*1.097 ],
        shifted_fov: 10,
        lookAt :new THREE.Vector3( 0, 0, 0 )
    },
    {
        left: 0.01,
        bottom: 0.01,
        width: 0.325*h/w*4/3,
        height: 0.325,
        eye: [ 0, 310, (310*1.097)+scene_dis ],
        fov: 10,
        init_eye: [ 0, 310, (310*1.097)+scene_dis ],
        init_fov: 10,
        shifted_eye: [ 0, 0, 4.5+scene_dis ],
        shifted_fov: 110,
        lookAt :new THREE.Vector3( 0, 0, scene_dis )
    },
];
if(w<h){
    views[0].fov=125
}
$(document).click(function(e){

    var x = e.clientX;
    var y = e.clientY;
    if(x>w - w * views[1].width - h * views[1].left && y< (h * views[1].bottom+h * views[1].height) && !credit_on){
        if(zoomed_out){
            zoom_in()
            return false
        }else{
            zoom_out()
            return false
        }
    }else if(x>w - w * views[1].width - h * views[1].left && y< (h * views[1].bottom+h * views[1].height)   +  $('.source_btn').outerHeight()*1.15 && !credit_on){

    }else if(!credit_on){
        if(raycaster_obj_link[hovered]===''||zoomed_out){

        }else{
            window.open(raycaster_obj_link[hovered], '_blank').focus();
        }
    }
})
init()
function init(){

    $('.fake_scroll').append('<div class="view_hover"></div>')
    $('.fake_scroll').append('<div class="source_btn">source</div>')

    $('.view_hover').css({'left':Math.floor( w - w * views[1].width - h * views[1].left) +'px'})
    $('.view_hover').css({'top':Math.floor( h * views[1].bottom) +'px'})
    $('.view_hover').css({'width':Math.floor( w * views[1].width) +'px'})
    $('.view_hover').css({'height': Math.floor( h * views[1].height) +'px'})
    $('.source_btn').css({'top':(Math.floor( h * views[1].bottom)+Math.floor( h * views[1].height)) +'px'})
    $('.source_btn').css({'left':Math.floor( w - w * views[1].width - h * views[1].left) +'px'})


    canvas = document.getElementById("canvas");

 
$('.source_btn').click(function(){
    $('.credit_wrapper').show()
    credit_on = true
})
$('.close').click(function(){
    $('.credit_wrapper').hide()
    credit_on = false
    return false
})





    renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvas } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( $('.fake_scroll').outerWidth(), window.innerHeight );
    renderer.setClearColor( 0x000000 );//0x );

    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;



    for ( let ii = 0; ii < views.length;  ii++ ) {
        const view = views[ ii ];
        const camera = new THREE.PerspectiveCamera( view.fov, $('.fake_scroll').outerWidth()/ window.innerHeight, 1, 10000 );
        // console.log(camera)
        view.camera = camera;
    }



    const near = 450;
    const far = 510;
    // const near = 10;
    // const far = 60;
    scene.fog = new THREE.Fog(0x000000, near, far);

                light1 = new THREE.SpotLight( 0x391fff );
                light1.position.set( 100, 10, 0 );
                light1.penumbra = 1;
                light1.distance = 200;
                light1.intensity = light1_value[0];
                light1.angle = Math.PI / 8;
                scene.add( light1 );

                light2 = new THREE.PointLight( 0xffffff );
                light2.position.set( 0, -15, 0 );
                light2.intensity = light2_value[0];
                scene.add( light2 );

                whole_light = new THREE.AmbientLight( 0xffffff );
                whole_light.position.set( 0, 0, 0 );
                whole_light.intensity = whole_light_value[0];
                scene.add( whole_light );


    create_board()
}
function create_board(){
    for (var i = 0; i < layer_amount; i++) {
        layer_pivot_array[i] = new THREE.Group()
        whole_pivot.add(layer_pivot_array[i])
        plate_pivot_array[i] = Array(layer_amount-i+2)
        var texture
        if((layer_amount-i)>4){
            console.log('he')
            texture = loader.load( "img/bgn-"+pad(19-(layer_amount-i), 2)+".png" );
        }else{
            texture = loader.load( "img/bg-"+pad(layer_amount-i, 2)+".png" );
        }

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
                if((layer_amount-i)==18){
                        layer_material_array[i][k] = new THREE.MeshPhongMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                        layer_material_array_cloned[i][k] = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                }else if((layer_amount-i)==17){

                        layer_material_array[i][k] = new THREE.MeshPhongMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                        layer_material_array_cloned[i][k] = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                }else if((layer_amount-i)==16){

                        layer_material_array[i][k] = new THREE.MeshPhongMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                        layer_material_array_cloned[i][k] = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                }else{

                        layer_material_array[i][k] = new THREE.MeshPhongMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                        layer_material_array_cloned[i][k] = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, color:0xffffff} );
                }
                // const material = new THREE.MeshBasicMaterial( {map: layer_material_array[i], side: THREE.DoubleSide, color:0xffffff} );
                const plate = new THREE.Mesh( geometry, layer_material_array[i][k] );
                      plate.position.z = translatez
                      //뒤에서부터..
                        if(i==0){
                            console.log(raycaster_obj)
                            if(k<8){
                                raycaster_obj[raycaster_obj.length-1].push(plate)
                            }else if(k<16){
                                raycaster_obj[raycaster_obj.length-2].push(plate)
                            }else{
                                raycaster_obj[raycaster_obj.length-3].push(plate)
                            }
                        }else if(i==1){
                            if(k<11){
                                raycaster_obj[raycaster_obj.length-1].push(plate)
                            }else if(k<20){
                                raycaster_obj[raycaster_obj.length-2].push(plate)
                            }else{
                                raycaster_obj[raycaster_obj.length-3].push(plate)
                            }
                        }else if(i==2){
                            if(k<5){
                                raycaster_obj[raycaster_obj.length-1].push(plate)
                            }else if(k<10){
                                raycaster_obj[raycaster_obj.length-2].push(plate)
                            }else{
                                raycaster_obj[raycaster_obj.length-3].push(plate)
                            }
                        }else if(i==3){
                            if(k<6){
                                raycaster_obj[raycaster_obj.length-1].push(plate)
                            }else if(k<12){
                                raycaster_obj[raycaster_obj.length-2].push(plate)
                            }else{
                                raycaster_obj[raycaster_obj.length-3].push(plate)
                            }
                        }else if(i==4){
                            if(k<5){
                                raycaster_obj[raycaster_obj.length-1].push(plate)
                            }else if(k<11){
                                raycaster_obj[raycaster_obj.length-2].push(plate)
                            }else{
                                raycaster_obj[raycaster_obj.length-3].push(plate)
                            }
                        }else if(plate_pivot_array[i].length%3==0){
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
                        if(k==plate_pivot_array[i].length-1){
                        raycaster_obj[raycaster_obj.length-1].reverse()

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
                        layer_pivot_array_cloned[m].scale.y = 1.1
                        layer_pivot_array_cloned[m].scale.x = get_rad(translatey,plate_pivot_array[m].length)/translatez
                        layer_pivot_array_cloned[m].scale.z = get_rad(translatey,plate_pivot_array[m].length)/translatez
                            // console.log(layer_pivot_array_cloned[m])
                            for (var i = layer_pivot_array_cloned[m].children.length - 1; i >= 0; i--) {
                                // layer_pivot_array_cloned[m].children[i].children[0].material = layer_material_array_cloned[m][i]
                            }
                            
                    }
                    scene.add( whole_pivot_cloned)
                    get_scrolling_value(scrollpos,selected,false)
                    render()
                    setTimeout(function(){
                            render()},1000)

}
function render(){
                for ( let ii = 0; ii < views.length; ii++ ) {

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
                    // console.log(scene.children[0].children[selected].position)
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
    $('.gradient').css({'opacity':map_range(easeInQuad(zoomed_out_counter),0,speed,1,0)})

    whole_pivot.rotation.y = degrees_to_radians(scrollpos%(translatey*h)/(translatey*h)*360+map_range(easeInQuad(zoomed_out_counter),0,speed,0,360))
    whole_pivot_cloned.rotation.y = degrees_to_radians(scrollpos%(translatey*h)/(translatey*h)*360+map_range(easeInQuad(zoomed_out_counter),0,speed,0,360))
    light1.intensity = map_range(easeInQuad(zoomed_out_counter),0,speed,light1_value[0],light1_value[1]);
    light2.intensity = map_range(easeInQuad(zoomed_out_counter),0,speed,light2_value[0],light2_value[1]);
    whole_light.intensity = map_range(easeInQuad(zoomed_out_counter),0,speed,whole_light_value[0],whole_light_value[1]);

    for ( let ii = 0; ii < views.length;  ii++ ) {
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
            layer_pivot_array[i].scale.y = map_range(zoomed_out_counter,0,speed,1,1.1)
            layer_pivot_array[i].scale.z = map_range(zoomed_out_counter,0,speed,scrolling_value[i-(selected-2)][1],get_rad(translatey,plate_pivot_array[i].length)/translatez)
        }else if(i>selected+4){
            layer_pivot_array[i].scale.x = map_range(zoomed_out_counter,0,speed,0,get_rad(translatey,plate_pivot_array[i].length)/translatez)
            layer_pivot_array[i].scale.y = map_range(zoomed_out_counter,0,speed,1,1.1)
            layer_pivot_array[i].scale.z = map_range(zoomed_out_counter,0,speed,0,get_rad(translatey,plate_pivot_array[i].length)/translatez)
        }else{
            layer_pivot_array[i].scale.x = map_range(zoomed_out_counter,0,speed,5+(i-(selected+4)*0.1),get_rad(translatey,plate_pivot_array[i].length)/translatez)
            layer_pivot_array[i].scale.y = map_range(zoomed_out_counter,0,speed,1,1.1)
            layer_pivot_array[i].scale.z = map_range(zoomed_out_counter,0,speed,5+(i-(selected+4)*0.1),get_rad(translatey,plate_pivot_array[i].length)/translatez)
        }
            // if(zoomed_out){
            //     if(i>selected){
            //         layer_pivot_array[i].position.y = -1*translatey*0.4
            //     }else{
            //         layer_pivot_array[i].position.y = translatey*0.4
            //     }
            // }else{
            //     if(i>selected){
            //         layer_pivot_array_cloned[i].position.y = -1*translatey*0.4
            //     }else{
            //         layer_pivot_array_cloned[i].position.y = translatey*0.4
            //     }
            // }

        if(i == selected-2){
                layer_pivot_array_cloned[i].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-2].length)/translatez,scrolling_value[0][1])
                layer_pivot_array_cloned[i].scale.y = map_range(zoomed_out_counter,0,speed,1.1, 1)
                layer_pivot_array_cloned[i].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-2].length)/translatez,scrolling_value[0][2])
                    if(i>selected){
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[0][0])
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[0][0],-1*translatey*0.4)
                    }else{
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[0][0])
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[0][0],translatey*0.4)
                    }
            }

        else if(i == selected-1){
                layer_pivot_array_cloned[selected-1].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-1].length)/translatez,scrolling_value[1][1])
                layer_pivot_array_cloned[selected-1].scale.y = map_range(zoomed_out_counter,0,speed,1.1, 1)
                layer_pivot_array_cloned[selected-1].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-1].length)/translatez,scrolling_value[1][2])
                    if(i>selected){
                        layer_pivot_array_cloned[selected-1].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[1][0])
                        layer_pivot_array[selected-1].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[1][0],-1*translatey*0.4)
                    }else{
                        layer_pivot_array_cloned[selected-1].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[1][0])
                        layer_pivot_array[selected-1].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[1][0],translatey*0.4)
                    }
            }

        else if(i == selected-0){
                layer_pivot_array_cloned[selected-0].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-0].length)/translatez,scrolling_value[2][1])
                layer_pivot_array_cloned[selected-0].scale.y = map_range(zoomed_out_counter,0,speed,1.1, 1)
                layer_pivot_array_cloned[selected-0].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected-0].length)/translatez,scrolling_value[2][2])
                    if(i>selected){
                        layer_pivot_array_cloned[selected-0].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[2][0])
                        layer_pivot_array[selected-0].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[2][0],-1*translatey*0.4)
                    }else{
                        layer_pivot_array_cloned[selected-0].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[2][0])
                        layer_pivot_array[selected-0].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[2][0],translatey*0.4)
                    }
            }

        else if(i == selected+1){
                layer_pivot_array_cloned[selected+1].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+1].length)/translatez,scrolling_value[3][1])
                layer_pivot_array_cloned[selected+1].scale.y = map_range(zoomed_out_counter,0,speed,1.1, 1)
                layer_pivot_array_cloned[selected+1].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+1].length)/translatez,scrolling_value[3][2])
                    if(i>selected){
                        layer_pivot_array_cloned[selected+1].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[3][0])
                        layer_pivot_array[selected+1].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[3][0],-1*translatey*0.4)
                    }else{
                        layer_pivot_array_cloned[selected+1].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[3][0])
                        layer_pivot_array[selected+1].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[3][0],translatey*0.4)
                    }
            }

        else if(i == selected+2){
                layer_pivot_array_cloned[selected+2].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+2].length)/translatez,scrolling_value[4][1])
                layer_pivot_array_cloned[selected+2].scale.y = map_range(zoomed_out_counter,0,speed,1.1, 1)
                layer_pivot_array_cloned[selected+2].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+2].length)/translatez,scrolling_value[4][2])
                    if(i>selected){
                        layer_pivot_array_cloned[selected+2].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[4][0])
                        layer_pivot_array[selected+2].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[4][0],-1*translatey*0.4)
                    }else{
                        layer_pivot_array_cloned[selected+2].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[4][0])
                        layer_pivot_array[selected+2].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[4][0],translatey*0.4)
                    }
            }

        else if(i == selected+3){
                layer_pivot_array_cloned[selected+3].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+3].length)/translatez,scrolling_value[5][1])
                layer_pivot_array_cloned[selected+3].scale.y = map_range(zoomed_out_counter,0,speed,1.1, 1)
                layer_pivot_array_cloned[selected+3].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+3].length)/translatez,scrolling_value[5][2])
                    if(i>selected){
                        layer_pivot_array_cloned[selected+3].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[5][0])
                        layer_pivot_array[selected+3].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[5][0],-1*translatey*0.4)
                    }else{
                        layer_pivot_array_cloned[selected+3].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[5][0])
                        layer_pivot_array[selected+3].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[5][0],translatey*0.4)
                    }
            }

        else if(i == selected+4){
                layer_pivot_array_cloned[selected+4].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+4].length)/translatez,scrolling_value[6][1])
                layer_pivot_array_cloned[selected+4].scale.y = map_range(zoomed_out_counter,0,speed,1.1, 1)
                layer_pivot_array_cloned[selected+4].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[selected+4].length)/translatez,scrolling_value[6][2])
                    if(i>selected){
                        layer_pivot_array_cloned[selected+4].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[6][0])
                        layer_pivot_array[selected+4].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[6][0],-1*translatey*0.4) 
                    }else{
                        layer_pivot_array_cloned[selected+4].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[6][0])
                        layer_pivot_array[selected+4].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[6][0],translatey*0.4) 
                    }
            }
        else if(i>selected+4 && i<=(layer_pivot_array_cloned.length-10)){
            layer_pivot_array_cloned[i].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,0)
            layer_pivot_array_cloned[i].scale.y = map_range(zoomed_out_counter,0,speed,1.1,1)
            layer_pivot_array_cloned[i].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,0)
                    if(i>selected){
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[6][0])
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[6][0],-1*translatey*0.4) 
                    }else{
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[6][0])
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[6][0],translatey*0.4) 
                    }
        }
        else if(i<selected-2){
            layer_pivot_array_cloned[i].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,5+(i-(selected+4)*0.1))
            layer_pivot_array_cloned[i].scale.y = map_range(zoomed_out_counter,0,speed,1.1,1)
            layer_pivot_array_cloned[i].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,5+(i-(selected+4)*0.1))
                    if(i>selected){
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,-1*translatey*0.4,scrolling_value[0][0])
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[0][0],-1*translatey*0.4)
                    }else{
                        layer_pivot_array_cloned[i].position.y = map_range(zoomed_out_counter,0,speed,translatey*0.4,scrolling_value[0][0])
                        layer_pivot_array[i].position.y = map_range(zoomed_out_counter,0,speed,scrolling_value[0][0],translatey*0.4)
                    }
        }
        if(i>(layer_pivot_array_cloned.length-10)){
            layer_pivot_array_cloned[i].scale.x = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,0)
            layer_pivot_array_cloned[i].scale.y = map_range(zoomed_out_counter,0,speed,1.1,1)
            layer_pivot_array_cloned[i].scale.z = map_range(zoomed_out_counter,0,speed,get_rad(translatey,plate_pivot_array[i].length)/translatez,0)
                layer_pivot_array_cloned[i].position.y = map_range(easeInQuad(zoomed_out_counter),
                                                                    0,
                                                                    speed,
                                                                    -1*translatey*0.4-1*translatey*0.0000175*((i-selected)*(i-selected)*(i-selected)*(i-selected)),
                                                                    scrolling_value[6][0])
                layer_pivot_array[i].position.y = map_range(easeInQuad(zoomed_out_counter),
                                                            0,
                                                            speed,
                                                            scrolling_value[6][0],
                                                            -1*translatey*0.4-1*translatey*0.0000175*((i-selected)*(i-selected)*(i-selected)*(i-selected)))
        }
    }


}
function zoom_out(){

    zoomed_out = true
    zoomed_out_counter ++ 

    // ///mainview zoomout
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
        zooming(zoomed_out_counter)  
    }else{
            scrollpos = $('.fake_scroll_wrapper').scrollTop()+timeoffset;
            get_scrolling_value(scrollpos,selected,false)
    }
    render()

}

function zoom_in(){

    zoomed_out = false
    zoomed_out_counter --

    if(zoomed_out_counter == 1){
        for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
            layer_pivot_array[i].visible = true
        }
    }
    ///sideview zoomin
    if(zoomed_out_counter == speed){
        for (var i = layer_pivot_array_cloned.length - 1; i >= 0; i--) {
        }
    }


    if(zoomed_out_counter>0){
        setTimeout(function(){
            zoom_in()
        },1)
        zooming(zoomed_out_counter)  
    }else{
            scrollpos = $('.fake_scroll_wrapper').scrollTop()+timeoffset;
            // console.log(selected)
            get_scrolling_value(scrollpos,selected,false)
    }
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

$('canvas').mousemove(function(e){
                mousepos_x = e.pageX
                mousepos_y = e.pageY
                $('.scrolldown').css({'left':e.pageX+'px','top':(e.pageY)+'px'})
    event.preventDefault();

    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;


    raycaster.setFromCamera( mouse, views[0].camera );
    for (var i = 0; i <  raycaster_obj.length; i++) {
        var intersects = raycaster.intersectObjects(raycaster_obj[i]); 
        if ( intersects.length > 0 ) {
                mousepos_x = e.pageX
                mousepos_y = e.pageY
                $('.scrolldown').css({'left':e.pageX+'px','top':(e.pageY)+'px'})
            hovered = i
            hover(hovered)
            return false
        }
    }


})
function hover(){
    for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
        layer_pivot_array[i]
        if(i>(layer_pivot_array.length-0)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x000000)
            }
        }else if(i>(layer_pivot_array.length-1)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x1D1E1E)
            }
        }else if(i>(layer_pivot_array.length-2)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x3D403E)
            }
        }else if(i>(layer_pivot_array.length-3)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x656B67)
            }
        }else if(i>(layer_pivot_array.length-4)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x656B67)
            }
        }else if(i>(layer_pivot_array.length-5)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x838B85)
            }
        }else if(i>(layer_pivot_array.length-6)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0xADB8B0)
            }
        }else if(i>(layer_pivot_array.length-7)){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0xDADFDB)
            }
        }else{
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0xFFFFFF)
            }
        }
        if(i == selected+2){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0xADB8B0)
            }
        }
        if(i == selected+3){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x3D403E)
            }
        }
        if(i == selected+4){
            for (var k = layer_pivot_array[i].children.length - 1; k >= 0; k--) {
                layer_pivot_array[i].children[k].children[0].material.color = new THREE.Color(0x3D403E)
            }
        }
    }
            console.log(hovered)
    for (var k = raycaster_obj[hovered].length - 1; k >= 0; k--) {
        if(raycaster_obj_link[hovered]===''){
        }else{
                raycaster_obj[hovered][k].material.color = new THREE.Color(0x199b82)
        }
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
    if(Math.floor(timeoffset/30) == timeoffset/30){
            scrollcounter++
            $('.fake_scroll_wrapper').scrollTop($('.fake_scroll_wrapper').scrollTop()+1+10)
            scrollpos = $('.fake_scroll_wrapper').scrollTop()+1+timeoffset;
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
            get_scrolling_value(scrollpos,k,true)
        }
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

