import Layout from '../../components/layouts/article'
import { Input, Container, useColorModeValue } from '@chakra-ui/react'
import { WordBox } from '../../components/wordbox'

const Vocabulary = () => (
    <Layout title="Vocabulary">
        <Container paddingTop={35}>
            <Input placeholder='&#x1F50D; Search Word' onKeyUp={search} id="searchbar" borderColor={useColorModeValue('#ABADB6', 'whiteAlpha.400')} mt={14}></Input>

            <WordBox word="Canis, Canis | 3rd Common" id="caniscanisdog">
                Dog
            </WordBox>

            <WordBox word="Coquus, Coquī | 2nd Masculine" id="coquuscoquichef">
                Chef
            </WordBox>

            <WordBox word="Est (s̄um, esse, fuī, futurum)" id="est(sumessefuifuturum)istobe">
                Is / To Be
            </WordBox>

            <WordBox word="Fillia, Filliae | 1st Feminine" id="filliafilliaedaughter">
                Daughter
            </WordBox>

            <WordBox word="Filius, Filiī | 2nd Masculine" id="filiusfiliison">
                Son
            </WordBox>

            <WordBox word="Hortus, Hortī | 2nd Masculine" id="hortushortigarden">
                Garden
            </WordBox>

            <WordBox word="In (+ ablative)" id="in(+ablative)inonintoonto">
                In/ On / Into / Onto
            </WordBox>

            <WordBox word="Laboro, Laborāre, Laborāvī, Laborātum" id="laborolaborarelaboravilaboratumtowork">
                To Work
            </WordBox>

            <WordBox word="Mater, Matris | 3rd Feminine" id="matermatrismother">
                Mother
            </WordBox>

            <WordBox word="Pater, Patris | 3rd Masculine" id="paterpatrisfather">
                Father
            </WordBox>

            <WordBox word="Sedeo, Sedēre, Sessī, Sessum" id="sedeosederesessisessumtosit">
                To Sit
            </WordBox>

            <WordBox word="Via, Via | 1st Feminine" id="viaviaroadstreetway">
                Road / Street / Way
            </WordBox>

            <WordBox word="Amicus, Amīcī | 2nd Masculine" id="amicusamicifriend">
                Friend
            </WordBox>

            <WordBox word="Ancilla, Ancillae | 1st Feminine" id="ancillaancillaeslavegirlhandmaid">
                Slave Girl / Handmaid
            </WordBox>

            <WordBox word="Cena, Cenae | 1st Feminine" id="cenacenaedinner">
                Dinner
            </WordBox>

            <WordBox word="Dominus, Dominī | 2nd Masculine" id="dominusdominimaster">
                Master
            </WordBox>

            <WordBox word="Cibus, Cibī | 2nd Masculine" id="cibuscibifood">
                Food
            </WordBox>

            <WordBox word="Dormio, Dormīre, Dormīvī, Dormitum" id="dormiodormiredormividormitumtosleep">
                To Sleep
            </WordBox>

            <WordBox word="Intro, Intrāre, Intrāvī, Intrātum" id="introintrareintraviintratumtoenter">
                To Enter
            </WordBox>

            <WordBox word="Laetus, Laeta, Laetum" id="laetuslaetalaetumhappy">
                Happy
            </WordBox>

            <WordBox word="Laudo, Laudāre, Laudāvī, Laudātum" id="laudolaudarelaudavilaudatum">
                To Praise
            </WordBox>

            <WordBox word="Mercator, Mercatoris | 3rd Masculine" id="mercatormercatorismerchant">
                Merchant
            </WordBox>

            <WordBox word="Quoque" id="quoquealsotoo">
                Also / Too
            </WordBox>

            <WordBox word="Saluto, Salutāre, Salutāvī, Salutātum" id="salutosalutaresalutavisalutatumtogreet">
                To Greet
            </WordBox>

            <WordBox word="Ad (+ Accusative) " id="ad(+accusative)to">
                To
            </WordBox>

            <WordBox word="Bibo, Bibere, Bibī, Bibitum" id="bibobiberebibibibitumtodrink">
                To Drink
            </WordBox>

            <WordBox word="Circumspecto, Circumspectāre, Circumspectāvī, Circumspectātum" id="circumspectocircumspectarecircumspectavicircumspectatumtolookaround">
                To Look Around
            </WordBox>

            <WordBox word="Clamo, Clamāre, Clamāvī, Clamātum" id="clamoclamareclamaviclamatumtoshout">
                To Shout
            </WordBox>

            <WordBox word="Ecce" id="eccelook">
                Look
            </WordBox>

            <WordBox word="Et" id="etand">
                And
            </WordBox>

            <WordBox word="Exeo, Exīre, Exīvī, Exitum" id="exeoexireexiviexitumtogoout">
                To go out
            </WordBox>

            <WordBox word="Exspecto, Exspectāre, Exspectāvī, Exspectātum" id="exspectoexspectareexspectaviexspectatumtowaitfor">
                To Wait For
            </WordBox>

            <WordBox word="Ianua, Ianuae | 1st Feminine" id="ianuaianuaedoor">
                Door
            </WordBox>

            <WordBox word="Iratus, Irata, Iratum" id="iratusiratairatumangry">
                Angry
            </WordBox>

            <WordBox word="Leo, Leonis | 3rd Common" id="leoleonislion">
                Lion
            </WordBox>

            <WordBox word="Magnus, Magna, Magnum" id="magnusmagnamagnumbiglargegreat">
                Big / Large / Great
            </WordBox>

            <WordBox word="Navis, Navis | 3rd Feminine" id="navisnavisship">
                Ship
            </WordBox>

            <WordBox word="Nōn" id="nonnot">
                Not
            </WordBox>

            <WordBox word="Porto, Portāre, Portāvī, Portātum" id="portoportareportaviportatumtocarry">
                To Carry
            </WordBox>

            <WordBox word="Respondeo, Respondēre, Respondī, Responsum" id="respondeorespondererespondiresponsumtoreply">
                To Reply
            </WordBox>

            <WordBox word="Rideo, Ridēre, Rīsī, Rīsum" id="rideoridererisirisumtolaugh,tosmile">
                To Laugh, To Smile
            </WordBox>

            <WordBox word="Salveo, Salvēre" id="salveosalverehellotobewell">
                Hello / To be well
            </WordBox>

            <WordBox word="Surgo, Surgere, Surrexī, Surrectum" id="surgosurgeresurrexisurrectumtogetuptostandup">
                To Get Up / To Stand Up
            </WordBox>

            <WordBox word="Taberna, Tabernae | 1st Feminine" id="tabernatabernaeshopstoreinn">
                Shop / Store / Inn
            </WordBox>

            <WordBox word="Video, Vidēre, Vīdī, Vīsum" id="videoviderevidivisumtosee">
                To See
            </WordBox>

            <WordBox word="Vinum, Vinī | 2nd Neuter" id="vinumviniwine">
                Wine
            </WordBox>

            <WordBox word="Ago, Agere, Egī, Actum" id="agoagereegiactumdoestodo">
                Does / To Do
            </WordBox>

            <WordBox word="Anulus, Anulī | 2nd Masculine" id="anulusanuliring">
                Ring
            </WordBox>

            <WordBox word="Coquo, Coquere, Coxī, Coctum" id="coquocoquerecoxicoctumtocook">
                To Cook
            </WordBox>

            <WordBox word="Cur" id="curwhy">
                Why
            </WordBox>

            <WordBox word="Ē, Ex" id="eexfromoutof">
                From / Out of
            </WordBox>

            <WordBox word="Ego, Meī | 1st Common" id="egomeii">
                I
            </WordBox>

            <WordBox word="Eheu" id="eheuohno">
                Oh No
            </WordBox>

            <WordBox word="Habeo, Habēre, Habuī, Habitum" id="habeohaberehabuihabitumtohave">
                To Have
            </WordBox>

            <WordBox word="Inquit" id="inquitsays">
                Says
            </WordBox>

            <WordBox word="Iudex, Iudicis | 3rd Masculine" id="iudexiudicisjudge">
                Judge
            </WordBox>

            <WordBox word="Mendax, Mendacis | 3rd Common" id="mendaxmendacisliar">
                Liar
            </WordBox>

            <WordBox word="Pecunia, Pecuniae | 1st Feminine" id="pecuniapecuniaemoney">
                Money
            </WordBox>

            <WordBox word="Perterritus, Perterrita, Perterritum" id="perterritusperterritaperterritumterrified">
                Terrified
            </WordBox>

            <WordBox word="Poeta, Poetae | 1st Masculine" id="poetapoetaepoet">
                Poet
            </WordBox>

            <WordBox word="Quaero, Quaerere, Quaesīvī, Quaesitum" id="quaeroquaererequaesiviquaesitumtolookfor,tosearchfor">
                To Look For, To Search For
            </WordBox>

            <WordBox word="Quis" id="quiswho">
                Who
            </WordBox>

            <WordBox word="Reddo, Reddere, Reddidī, Redditum" id="reddoredderereddidiredditumtogiveback">
                To Give Back
            </WordBox>

            <WordBox word="Satis" id="satisenough">
                Enough
            </WordBox>

            <WordBox word="Sed" id="sedbut">
                But
            </WordBox>

            <WordBox word="Signum, Signī | 2nd Neuter" id="signumsignisignseal">
                Sign / Seal
            </WordBox>

            <WordBox word="Tu, Tuī" id="tutuiyou">
                You
            </WordBox>

            <WordBox word="Voco, Vocāre, Vocāvī, Vocātum" id="vocovocarevocavivocatumtocall">
                To Call
            </WordBox>

            <WordBox word="Adsum, Adess, Adfuī, Adfuturum" id="adsumadessadfuiadfuturumisheretobehere">
                Is Here / To Be Here
            </WordBox>

            <WordBox word="Adsum, Adesse, Adfuī, Adfuturum" id="adsumadesseadfuiadfuturumareheretobehere">
                Are Here / To Be Here
            </WordBox>

            <WordBox word="Agricola, Agricolae | 1st Masculine" id="agricolaagricolaefarmer">
                Farmer
            </WordBox>

            <WordBox word="Ambulo, Ambulāre, Abulāvī, Ambulātum" id="ambuloambulareabulaviambulatumtowalk">
                to Walk
            </WordBox>

            <WordBox word="Audio, Audīre, Audīvī, Auditum" id="audioaudireaudiviauditumtoheartolistento">
                To Hear / To Listen To
            </WordBox>

            <WordBox word="Clamor, Clamoris | 3rd Masculine" id="clamorclamorisshoutuproar">
                Shout / Uproar
            </WordBox>

            <WordBox word="Contendo, Cōntendere, Contendī, Contentum" id="contendocontenderecontendicontentumtohurry">
                To Hurry
            </WordBox>

            <WordBox word="Curro, Currere, Cucurrī, Cursum" id="currocurrerecucurricursumtorun">
                To Run
            </WordBox>

            <WordBox word="Fabula, Fabulae | 1st Feminine" id="fabulafabulaeaplayastory">
                A Play / A Story
            </WordBox>

            <WordBox word="Femina, Feminae | 1st Feminine" id="feminafeminaewoman">
                Woman
            </WordBox>

            <WordBox word="Hodiē" id="hodietoday">
                Today
            </WordBox>

            <WordBox word="Iuvenis, Iuvenis | 3rd Masculine" id="iuvenisiuvenisyoungman">
                Young Man
            </WordBox>

            <WordBox word="Meus, Mea, Meum" id="meusmeameummymine">
                My / Mine
            </WordBox>

            <WordBox word="Multus, Multa, Multum" id="multusmultamultummuch">
                Much
            </WordBox>

            <WordBox word="Optimus, Optima, Optimum" id="optimusoptimaoptimumverygoodexcellentbest">
                Very Good / Excellent / Best
            </WordBox>

            <WordBox word="Peto, Petere, Petīvī, Petitum" id="petopeterepetivipetitumtoheadfortoattack">
                To Head For / To Attack
            </WordBox>

            <WordBox word="Plaudo, Plaudere, Plausī, Plaesum" id="plaudoplaudereplausiplaesumtoapplaudtoclap">
                To Applaud / To Clap
            </WordBox>

            <WordBox word="Senex, Senis | 3rd Masculine" id="senexsenisoldman">
                Old Man
            </WordBox>

            <WordBox word="Specto, Spectāre, Spectāvī, Spectātum" id="spectospectarespectavispectatumtolookattowatch">
                To Look At / To Watch
            </WordBox>

            <WordBox word="Sto, Stare, Stetī, Statum" id="stostarestetistatumtostand">
                To Stand
            </WordBox>

            <WordBox word="Turba, Turbae | 1st Feminine" id="turbaturbaecrowd">
                Crowd
            </WordBox>

            <WordBox word="Ubi" id="ubiwhenwhere">
                When / Where
            </WordBox>

            <WordBox word="Urbs, Urbis | 3rd Feminine" id="urbsurbiscity">
                City
            </WordBox>

            <WordBox word="Venio, Venīre, Vēnī, Ventum" id="veniovenireveniventumtocome">
                To Come
            </WordBox>

            <WordBox word="Absum, Abesse, Afuī, Afuturum" id="absumabesseafuiafuturumtobeouttobeabsentisoutisabsent">
                To Be Out / To Be Absent / Is Out / Is Absent
            </WordBox>

            <WordBox word="Cubiculum, Cubiculī" id="cubiculumcubiculibedroom">
                Bedroom
            </WordBox>

            <WordBox word="Emo, Emere, Emī, Emptum" id="emoemereemiemptumtobuy">
                To Buy
            </WordBox>

            <WordBox word="Ferociter" id="ferociterfiercely">
                Fiercely
            </WordBox>

            <WordBox word="Festino, Festināre, Festināvī, Festinātum" id="festinofestinarefestinavifestinatumtohurry">
                To Hurry
            </WordBox>

            <WordBox word="Fortis, Fortis, Forte" id="fortisfortisfortebrave">
                Brave
            </WordBox>

            <WordBox word="Fur, Furis | 3rd Masculine" id="furfuristhief">
                Thief
            </WordBox>

            <WordBox word="Intentē" id="intenteintentlycarefully">
                Intently / Carefully
            </WordBox>

            <WordBox word="Libertus, Libertī | 2nd Masculine" id="libertuslibertifreedmanex-slave">
                Freedman / Ex-Slave
            </WordBox>

            <WordBox word="Olim" id="olimoncesometimeagoonceuponatime">
                Once / Some Time Ago / Once Upon A Time
            </WordBox>

            <WordBox word="Parvus, Parva, Parvum" id="parvusparvaparvumsmall">
                Small
            </WordBox>

            <WordBox word="Per" id="perthrough">
                Through
            </WordBox>

            <WordBox word="Postquam" id="postquamafter">
                After
            </WordBox>

            <WordBox word="Pulso, Pulsāre, Pulsāvī, Pulsātum" id="pulsopulsarepulsavipulsatumtohittopunch">
                To Hit / To Punch
            </WordBox>

            <WordBox word="Quod" id="quodbecause">
                Because
            </WordBox>

            <WordBox word="Res, Reī | 5th Feminine" id="resreithing">
                Thing
            </WordBox>

            <WordBox word="Scribo, Scribere, Scripsī, Scriptum" id="scriboscriberescripsiscriptumtowrite">
                To Write
            </WordBox>

            <WordBox word="Subito" id="subitosuddenly">
                Suddenly
            </WordBox>

            <WordBox word="Supero, Superāre, Superāvī, Superātum" id="superosuperaresuperavisuperatumtoovercometooverpower">
                To Overcome / To Overpower
            </WordBox>

            <WordBox word="Tum" id="tumthen">
                Then
            </WordBox>

            <WordBox word="Tuus, Tua, Tuum" id="tuustuatuumyouryours">
                Your / Yours
            </WordBox>

            <WordBox word="Vendo, Vendere, Vendidī, Venditum" id="vendovenderevendidivenditumtosell">
                To Sell
            </WordBox>

            <WordBox word="Vitupero, Vituperāre, Vituperāvi, Vituperātum" id="vituperovituperarevituperavivituperatumtoblametocurse">
                To Blame / To Curse
            </WordBox>

            <WordBox word="Ceno, Cenāre, Cenāvī, Cenātum" id="cenocenarecenavicenatumtoeattodine">
                To Eat / To Dine
            </WordBox>

            <WordBox word="Cum" id="cumwith">
                With
            </WordBox>

            <WordBox word="Facio, Facere, Fecī, Factum" id="faciofacerefecifactumtomaketodo">
                To Make / To Do
            </WordBox>

            <WordBox word="Heri" id="heriyesterday">
                Yesterday
            </WordBox>

            <WordBox word="Ingens, Ingentis" id="ingensingentishuge">
                Huge
            </WordBox>

            <WordBox word="Intelligo, Intelligere, Intellēxī, Intellectum" id="intelligointelligereintellexiintellectumtounderstand">
                To Understand
            </WordBox>

            <WordBox word="Lacrimo, Lacrimāre, Lacrimāvī, Lacrimātum" id="lacrimolacrimarelacrimavilacrimatumtoweeptocry">
                To Weep / To Cry
            </WordBox>

            <WordBox word="Mortuus, Mortua, Mortuum" id="mortuusmortuamortuumdead">
                Dead
            </WordBox>

            <WordBox word="Narro, Narrāre, Narrāvī, Narrātum" id="narronarrarenarravinarratumtotelltorelate">
                To Tell / To Relate
            </WordBox>

            <WordBox word="Nihil" id="nihilnothing">
                Nothing
            </WordBox>

            <WordBox word="Neco, Necāre, Necāvī, Necātum" id="neconecarenecavinecatumtokill">
                To Kill
            </WordBox>

            <WordBox word="Omnis, Omnis, Omne" id="omnisomnisomneeveryall">
                Every / All
            </WordBox>

            <WordBox word="Paro, Parāre, Parāvi, Parātum" id="paroparareparaviparatumtoprepare">
                To Prepare
            </WordBox>

            <WordBox word="Prope" id="propenear">
                Near
            </WordBox>

            <WordBox word="Rogo, Rogāre, Rogāvī, Rōgātum" id="rogorogarerogavirogatumtoask">
                To Ask
            </WordBox>

            <WordBox word="Tacitē" id="tacitequietly">
                Quietly
            </WordBox>

            <WordBox word="Tamen" id="tamenhowevernevertheless">
                However / Nevertheless
            </WordBox>

            <WordBox word="Terreo, Terrēre, Terruī, Territum" id="terreoterrereterruiterritumtofrightentoscare">
                To Frighten / To Scare
            </WordBox>

            <WordBox word="Valdē" id="valdeverymuch">
                Very Much
            </WordBox>

            <WordBox word="Agito, Agitāre, Agitāvī, Agitatum" id="agitoagitareagitaviagitatumtochasetohunt">
                To Chase / To Hunt
            </WordBox>

            <WordBox word="Consumo, Consumere, Consumpsī, Consumptum" id="consumoconsumereconsumpsiconsumptumtoeat">
                To Eat
            </WordBox>

            <WordBox word="Duco, Ducere, Duxi, Ductum" id="ducoducereduxiductumtoleadtotake">
                To Lead / To Take
            </WordBox>

            <WordBox word="Eum" id="eumhim">
                Him
            </WordBox>

            <WordBox word="Ferox, Ferocis" id="feroxferocisfierce">
                Fierce
            </WordBox>

            <WordBox word="Gladius, Gladiī | 2nd Masculine" id="gladiusgladiisword">
                Sword
            </WordBox>

            <WordBox word="Hic, Haec, Hoc" id="hichaechocthis">
                This
            </WordBox>

            <WordBox word="Ignavus, Ignava, Ignavum" id="ignavusignavaignavumcowardly">
                Cowardly
            </WordBox>

            <WordBox word="Nuntius, Nuntiī | 2nd Masculine" id="nuntiusnuntiimessenger">
                Messenger
            </WordBox>

            <WordBox word="Pes, Pedis | 3rd Masculine" id="pespedisfoot">
                Foot
            </WordBox>

            <WordBox word="Porta, Portae | 1st Feminine" id="portaportaegate">
                Gate
            </WordBox>

            <WordBox word="Postulo, Postulāre, Postulāvī, Postulātum" id="postulopostularepostulavipostulatumtodemand">
                To Demand
            </WordBox>

            <WordBox word="Puer, Puerī" id="puerpueriboy">
                Boy
            </WordBox>

            <WordBox word="Pugno, Pugnāre, Pugnāvī, Pugnātum" id="pugnopugnarepugnavipugnatumtofight">
                To Fight
            </WordBox>

            <WordBox word="Saepae" id="saepaeoften">
                Often
            </WordBox>

            <WordBox word="Sangui, Sanguinis | 3rd Masculine" id="sanguisanguinisblood">
                Blood
            </WordBox>

            <WordBox word="Silva, Silvae | 1st Feminine" id="silvasilvaewoodforest">
                Wood / Forest
            </WordBox>

            <WordBox word="Sp̄ectaculum, Spectaculī | 2nd Neuter" id="spectaculumspectaculishowspectacle">
                Show / Spectacle
            </WordBox>

            <WordBox word="Statim" id="statimatonceimmediately">
                At Once / Immediately
            </WordBox>

            <WordBox word="Totus, Tota, Totum" id="totustotatotumwhole">
                Whole
            </WordBox>

            <WordBox word="Agnosco, Agnoscere, Agnōvī, Agnitum" id="agnoscoagnoscereagnoviagnitumtorecognize">
                To Recognize
            </WordBox>

            <WordBox word="Celeriter" id="celeriterquickly">
                Quickly
            </WordBox>

            <WordBox word="Cupio, Cupere, Cupīvī, Cupitum" id="cupiocuperecupivicupitumtowant">
                To Want
            </WordBox>

            <WordBox word="Do, Dare, Dedī, Datum" id="dodarededidatumtogive">
                To Give
            </WordBox>

            <WordBox word="Diēs, Dieī | 5th Masculine" id="diesdieiday">
                Day
            </WordBox>

            <WordBox word="Emitto, Emittere, Emīsī, Emissum" id="emittoemittereemisiemissumtothrowtosendout">
                To Throw / To Send Out
            </WordBox>

            <WordBox word="Fero, Ferre, Tulī, Latum" id="feroferretulilatumtobringtocarry">
                To Bring / To Carry
            </WordBox>

            <WordBox word="Homo | 3rd Masculine" id="homohumanbeingman">
                Human Being / Man
            </WordBox>

            <WordBox word="Hospes, Hospitis" id="hospeshospitisguest">
                Guest
            </WordBox>

            <WordBox word="Ille, Illa, Illud" id="illeillailludthat">
                That
            </WordBox>

            <WordBox word="Inspicio, Inspicere, Inspexī, Inspectum" id="inspicioinspicereinspexiinspectumtolookattoexamine">
                To Look At / To Examine
            </WordBox>

            <WordBox word="Iterum" id="iterumagain">
                Again
            </WordBox>

            <WordBox word="Maneo, Manēre, Mansī, Mansurum" id="maneomaneremansimansurumtoremaintostay">
                To Remain / To Stay
            </WordBox>

            <WordBox word="Medius, Media, Medium" id="mediusmediamediummiddleof">
                Middle Of
            </WordBox>

            <WordBox word="Mox" id="moxsoon">
                Soon
            </WordBox>

            <WordBox word="Offero, Offere, Obtulī, Oblatum" id="offerooffereobtulioblatumtooffer">
                To Offer
            </WordBox>

            <WordBox word="Ostendo, Ostendere, Ostendī, Ostentum" id="ostendoostendereostendiostentumtoshow">
                To Show
            </WordBox>

            <WordBox word="Post" id="postafter">
                After
            </WordBox>

            <WordBox word="Procedo, Procedere, Processī, Processum" id="procedoprocedereprocessiprocessumtoprocedetoadvance">
                To Procede / To Advance
            </WordBox>

            <WordBox word="Pulcher, Pulchra, Pulchrum" id="pulcherpulchrapulchrumbeautiful">
                Beautiful
            </WordBox>

            <WordBox word="Revenio, Revenīre, Revēnī, Reventum" id="reveniorevenirerevenireventumtocomebacktoreturn">
                To Come Back / To Return
            </WordBox>

            <WordBox word="Trado, Tradere, Tradidī, Traditum" id="tradotraderetradiditraditumtohandover">
                To Hand Over
            </WordBox>

            <WordBox word="Capio, Capere, Cēpī, Captum" id="capiocaperecepicaptumtotake">
                To Take
            </WordBox>

            <WordBox word="Civis, Civis | 3rd Masculine or Feminine" id="civisciviscitizen">
                Citizen
            </WordBox>

            <WordBox word="Convenio, Convenīre, Convēnī, Conventum" id="convenioconvenireconveniconventumtogathertomeet">
                To Gather / To Meet
            </WordBox>

            <WordBox word="Credo, Credere, Credidī, Creditum" id="credocrederecredidicreditumtotrusttobelieve">
                To Trust / To Believe
            </WordBox>

            <WordBox word="Dē" id="deabout">
                About
            </WordBox>

            <WordBox word="Faveo, Favēre, Favī, Fautum" id="faveofaverefavifautumtosupport">
                To Support
            </WordBox>

            <WordBox word="Invito, Invitāre, Invitāvī, Invitātum" id="invitoinvitareinvitaviinvitatumtoinvite">
                To Invite
            </WordBox>

            <WordBox word="Eo, īre, Iī, Itum" id="eoireiiitumtogo">
                To Go
            </WordBox>

            <WordBox word="Lego, Legere, Lēgī, Lectum" id="legolegerelegilectumtoread">
                To Read
            </WordBox>

            <WordBox word="Līberalis, Līberalis, Līberale" id="liberalisliberalisliberalegenerous">
                Generous
            </WordBox>

            <WordBox word="Minimē" id="minimeno">
                No
            </WordBox>

            <WordBox word="Ita vero" id="itaveroyesindeed">
                Yes Indeed
            </WordBox>

            <WordBox word="Murus, Murī" id="murusmuriwall">
                Wall
            </WordBox>

            <WordBox word="Noster, Nostra, Nostrum" id="nosternostranostrumour">
                Our
            </WordBox>

            <WordBox word="Nunc" id="nuncnow">
                Now
            </WordBox>

            <WordBox word="Placeo, Placēre, Placuī, Placitum" id="placeoplacereplacuiplacitumtoplease">
                To Please
            </WordBox>

            <WordBox word="Primus, Prima, Primum" id="primusprimaprimumfirst">
                First
            </WordBox>

            <WordBox word="Promitto, Promittere, Primīsī, Promissum" id="promittopromittereprimisipromissumtopromise">
                To Promise
            </WordBox>

            <WordBox word="Pugna, Pugnae | 1st Feminine" id="pugnapugnaefight">
                Fight
            </WordBox>

            <WordBox word="Senator, Senatoris | 3rd Masculine" id="senatorsenatorissenator">
                Senator
            </WordBox>

            <WordBox word="Sollicitus, Sollicita, Sollicitum" id="sollicitussollicitasollicitumworriedanxious">
                Worried / Anxious
            </WordBox>

            <WordBox word="Stultus, Stultua, Stultum" id="stultusstultuastultumstupid">
                Stupid
            </WordBox>

            <WordBox word="Valē" id="valegoodbye">
                Goodbye
            </WordBox>

            <WordBox word="Berverbo, Verberāre, Verberāvī, Verberātum" id="berverboverberareverberaviverberatumtostriketobeat">
                To Strike / To Beat
            </WordBox>

            <WordBox word="Vir, Virī | 2nd Masculine" id="virviriman">
                Man
            </WordBox>

            <WordBox word="Amitto, Amittere, Amīsī, Amissum" id="amittoamittereamisiamissumtolose">
                To Lose
            </WordBox>

            <WordBox word="Compleo, Complēre, Complēvī, Complētum" id="compleocomplerecomplevicompletumtofill">
                To Fill
            </WordBox>

            <WordBox word="Custodio, Custodīre, Custodīvī, Custoditum" id="custodiocustodirecustodivicustoditumtoguard">
                To Guard
            </WordBox>

            <WordBox word="Epistula, Epistulae | 1st Feminine" id="epistulaepistulaeletter">
                Letter
            </WordBox>

            <WordBox word="Flamma, Flammae | 1st Feminine" id="flammaflammaeflame">
                Flame
            </WordBox>

            <WordBox word="Fortiter" id="fortiterbravely">
                Bravely
            </WordBox>

            <WordBox word="Frustrā" id="frustrainvain">
                In Vain
            </WordBox>

            <WordBox word="Fugio, Fugere, Fūgī, Fugiturum" id="fugiofugerefugifugiturumtorunawaytoflee">
                To Run Away / To Flee
            </WordBox>

            <WordBox word="Fundus, Fundī | 2nd Masculine" id="fundusfundifarm">
                Farm
            </WordBox>

            <WordBox word="Iaceo, Iacēre, Iacuī, Iacitum" id="iaceoiacereiacuiiacitumtoliedown">
                To Lie Down
            </WordBox>

            <WordBox word="Iam" id="iamnow">
                Now
            </WordBox>

            <WordBox word="Igitur" id="igiturtherefore">
                Therefore
            </WordBox>

            <WordBox word="Mirabilis, Mirabilis, Mirabile" id="mirabilismirabilismirabilestrangeextraordinary">
                Strange / Extraordinary
            </WordBox>

            <WordBox word="Mitto, Mittere, Mīsī, Missum" id="mittomitteremisimissumtosend">
                To Send
            </WordBox>

            <WordBox word="Mons, Montis" id="monsmontismountain">
                Mountain
            </WordBox>

            <WordBox word="Optimē" id="optimeverywell">
                Very Well
            </WordBox>

            <WordBox word="Paene" id="paenenearlyalmost">
                Nearly / Almost
            </WordBox>

            <WordBox word="Sentio, Sentīre, Sensī, Sensum" id="sentiosentiresensisensumtofeel">
                To Feel
            </WordBox>

            <WordBox word="Tandem" id="tandematlast">
                At Last
            </WordBox>

            <WordBox word="Templum, Templī | 2nd Neuter" id="templumtemplitemple">
                Temple
            </WordBox>

            <WordBox word="Terra, Terrae" id="terraterraegroundland">
                Ground / Land
            </WordBox>

            <WordBox word="Timeo, Timēre, Timuī" id="timeotimeretimuitobeafraidoftofear">
                To Be Afraid Of / To Fear
            </WordBox>

            <WordBox word="Abeo, Abīre, Abīī, Abitum" id="abeoabireabiiabitumtogoaway">
                To Go Away
            </WordBox>

            <WordBox word="Accipio, Accipere, Accēpī, Acceptum" id="accipioaccipereaccepiacceptumtoaccept">
                To Accept
            </WordBox>

            <WordBox word="Callidus, Callida, Callidum" id="calliduscallidacallidumclevercunning">
                Clever / Cunning
            </WordBox>

            <WordBox word="Contentus, Contenta, Contentum" id="contentuscontentacontentumsatisfied">
                Satisfied
            </WordBox>

            <WordBox word="Exclamo, Exclamāre, Exclamāvī, Exclāmātum" id="exclamoexclamareexclamaviexclamatumtoexclaim">
                To Exclaim
            </WordBox>

            <WordBox word="Frater, Fratris" id="fraterfratrisbrother">
                Brother
            </WordBox>

            <WordBox word="Habito, Habitāre, Habitāvī, Habitatum" id="habitohabitarehabitavihabitatumtolive(in)">
                To Live (in)
            </WordBox>

            <WordBox word="Imperium, Imperiī" id="imperiumimperiiempirepower">
                Empire / Power
            </WordBox>

            <WordBox word="Invenio, Invenīre, Invēnī, Inventum" id="invenioinvenireinveniinventumtofind">
                To Find
            </WordBox>

            <WordBox word="Liber, Librī | 2nd Masculine" id="liberlibribook">
                Book
            </WordBox>

            <WordBox word="Nos" id="noswe">
                We
            </WordBox>

            <WordBox word="Nuntio, Nuntiāre, Nuntiāvī, Nuntiātum" id="nuntionuntiarenuntiavinuntiatumtoannounce">
                To Announce
            </WordBox>

            <WordBox word="Pax, Pacis | 3rd Feminine" id="paxpacispeace">
                Peace
            </WordBox>

            <WordBox word="Portus, Portūs | 4th Masculine" id="portusportusharbour">
                Harbour
            </WordBox>

            <WordBox word="Quam" id="quamthan">
                Than
            </WordBox>

            <WordBox word="Semper" id="semperalways">
                Always
            </WordBox>

            <WordBox word="Servo, Servāre, Servāvī, Servātum" id="servoservareservaviservatumtosavetolookafter">
                To Save / To Look After
            </WordBox>

            <WordBox word="Solus, Sola, Solum" id="solussolasolumalone">
                Alone
            </WordBox>

            <WordBox word="Taceo, Tavēre, Tacuī, Tacitum" id="taceotaveretacuitacitumtobesilenttobequiet">
                To Be Silent / To Be Quiet
            </WordBox>

            <WordBox word="Uxor, Uxoris" id="uxoruxoriswife">
                Wife
            </WordBox>

            <WordBox word="Vehementer" id="vehementerviolentlyloudly">
                Violently / Loudly
            </WordBox>

            <WordBox word="Vos" id="vosyouall">
                You All
            </WordBox>

            <WordBox word="Advenio, Advenīre, Advēnī, Adventum" id="advenioadvenireadveniadventumtoarrive">
                To Arrive
            </WordBox>

            <WordBox word="Aedificium, Aedificiī | 2nd Neuter" id="aedificiumaedificiiabuilding">
                A Building
            </WordBox>

            <WordBox word="Aeger, Aegra, Aegrum" id="aegeraegraaegrumsickill">
                Sick / Ill
            </WordBox>

            <WordBox word="Alter, Altera, Alterum" id="alteralteraalterumtheother">
                The Other
            </WordBox>

            <WordBox word="Canto, Cantāre, Cantāvī, Cantātum" id="cantocantarecantavicantatumtosing">
                To Sing
            </WordBox>

            <WordBox word="Ceterī, Ceterae, Cetera" id="cetericeteraeceteratheotherstherest">
                The Others / The Rest
            </WordBox>

            <WordBox word="Custos, Custodis | 3rd Masculine" id="custoscustodisguard">
                Guard
            </WordBox>

            <WordBox word="Dico, Dicere, Dīxī, Dictum" id="dicodiceredixidictumtosaytospeaktocall">
                To Say / To Speak / To Call
            </WordBox>

            <WordBox word="Excito, Excitare, Excitāvī, Excitātum" id="excitoexcitareexcitaviexcitatumtoarousetowakeup">
                To Arouse / To Wake Up
            </WordBox>

            <WordBox word="Fessus, Fessa, Fessum" id="fessusfessafessumtired">
                Tired
            </WordBox>

            <WordBox word="Interficio, Interficere, Interfēcī, Interfectum" id="interficiointerficereinterfeciinterfectumtokill">
                To Kill
            </WordBox>

            <WordBox word="Nolo, Non velle, Nolui" id="nolononvellenoluitonotwant">
                To Not Want
            </WordBox>

            <WordBox word="Novus, Nova, Novum" id="novusnovanovumnewstrange">
                New / Strange
            </WordBox>

            <WordBox word="Nullus, Nulla, Nullum" id="nullusnullanullumnonotanynone">
                No / Not Any / None
            </WordBox>

            <WordBox word="Possum, Posse, Potui" id="possumpossepotuitobeable">
                To Be Able
            </WordBox>

            <WordBox word="Ruo, Ruere, Ruī, Rutum" id="ruoruereruirutumtorush">
                To Rush
            </WordBox>

            <WordBox word="Sē" id="sehimselfherselfitselfthemselves">
                Himself / Herself / Itself / Themselves
            </WordBox>

            <WordBox word="Traho, Trahere, Traxī, Tractum" id="trahotraheretraxitractumtodrag">
                To Drag
            </WordBox>

            <WordBox word="Vita, Vitae | 1st Feminine" id="vitavitaelife">
                Life
            </WordBox>

            <WordBox word="Volo, Velle, Voluī" id="volovellevoluitowant">
                To Want
            </WordBox>

            <WordBox word="Vulnero, Vulnerāre, Vulnerāvī, Vulnerātum" id="vulnerovulnerarevulneravivulneratumtowound">
                To Wound
            </WordBox>

            <WordBox word="Aliquid" id="aliquidsomething">
                Something
            </WordBox>

            <WordBox word="Apud" id="apudamongatthehouseof">
                Among / At The House Of
            </WordBox>

            <WordBox word="Attonitus, Attonita, Attonitum" id="attonitusattonitaattonitumastonished">
                Astonished
            </WordBox>

            <WordBox word="Aula, Aulae | 1st Feminine" id="aulaaulaepalace">
                Palace
            </WordBox>

            <WordBox word="Coditiē" id="coditieeveryday">
                Every Day
            </WordBox>

            <WordBox word="Decorus, Decora, Decorum" id="decorusdecoradecorumrightproper">
                Right / Proper
            </WordBox>

            <WordBox word="Deleo, Delēre, Delēvī, Delētum" id="deleodeleredelevideletumtodestroy">
                To Destroy
            </WordBox>

            <WordBox word="Deus, Deī | 2nd Masculine" id="deusdeigod">
                God
            </WordBox>

            <WordBox word="Difficilis, Difficilis, Difficile" id="difficilisdifficilisdifficiledifficult">
                Difficult
            </WordBox>

            <WordBox word="Diligenter" id="diligentercarefully">
                Carefully
            </WordBox>

            <WordBox word="Domina, Dominae | 1st Feminine" id="dominadominaemistressladyofthehouse">
                Mistress / Lady Of The House
            </WordBox>

            <WordBox word="Donum, Donī | 2nd Neuter" id="donumdonigiftpresent">
                Gift / Present
            </WordBox>

            <WordBox word="Fidelis, Fidelis, Fidele" id="fidelisfidelisfidelefaithfulloyal">
                Faithful / Loyal
            </WordBox>

            <WordBox word="Ipse, Ipsa, Ipsum" id="ipseipsaipsumhimselfherselfitself">
                Himself / Herself / Itself
            </WordBox>

            <WordBox word="Iste, Ista, Istud" id="isteistaistudthat">
                That
            </WordBox>

            <WordBox word="Maritus, Maritī | 2nd Masculine" id="maritusmaritihusband">
                Husband
            </WordBox>

            <WordBox word="Necesse" id="necessenecessary">
                Necessary
            </WordBox>

            <WordBox word="Num" id="numsurely...not?">
                Surely ... Not?
            </WordBox>

            <WordBox word="Quam" id="quamhow">
                How
            </WordBox>

            <WordBox word="Quamquam" id="quamquamalthough">
                Although
            </WordBox>

            <WordBox word="-que" id="-queand">
                And
            </WordBox>

            <WordBox word="Rex, Regis | 3rd Masculine" id="rexregisking">
                King
            </WordBox>

            <WordBox word="Agmen, Agminis | 3rd Neuter" id="agmenagminisrowcolumnofpeopleprocession">
                Row / Column of People / Procession
            </WordBox>

            <WordBox word="Alius, Alia, Aliud" id="aliusaliaaliudotheranother">
                Other / Another
            </WordBox>

            <WordBox word="Aqua, Aquae | 1st Feminine" id="aquaaquaewater">
                Water
            </WordBox>

            <WordBox word="Claudo, Claudere, Clausī, Clausum" id="claudoclaudereclausiclausumtoshuttoblock">
                To Shut / To Block
            </WordBox>

            <WordBox word="Commodus, Commoda, Commodum" id="commoduscommodacommodumconvenient">
                Convenient
            </WordBox>

            <WordBox word="Debeo, Debēre, Debuī, Debitum" id="debeodeberedebuidebitumtoowetoought">
                To Owe / To Ought
            </WordBox>

            <WordBox word="Equus, Equī | 2nd Masculine" id="equusequihorse">
                Horse
            </WordBox>

            <WordBox word="Etiam" id="etiamevenalso">
                Even / Also
            </WordBox>

            <WordBox word="Impedio, Impedīre, Impedīvī, Impeditum" id="impedioimpedireimpediviimpeditumtohindertodelay">
                To Hinder / To Delay
            </WordBox>

            <WordBox word="Lectus. Lectī | 2nd Masculine" id="lectus.lecticouchbed">
                Couch / Bed
            </WordBox>

            <WordBox word="Lentē" id="lenteslowly">
                Slowly
            </WordBox>

            <WordBox word="Litus, Litōris | 3rd Neuter" id="lituslitorisseashoreshore">
                Seashore / Shore
            </WordBox>

            <WordBox word="Mare, Mari | 3rd Neuter" id="maremarisea">
                Sea
            </WordBox>

            <WordBox word="Miser, Misera, Miserum" id="misermiseramiserummiserablewretched">
                Miserable / Wretched
            </WordBox>

            <WordBox word="Nauta, Nautae | 1st Masculine" id="nautanautaesailor">
                Sailor
            </WordBox>

            <WordBox word="Princips, Principis | 3rd Masculine" id="principsprincipischiefchieftain">
                Chief / Chieftain
            </WordBox>

            <WordBox word="Qui, Quae, Quod" id="quiquaequodwhowhichthat">
                Who / Which / That
            </WordBox>

            <WordBox word="Redeo, Redēre, Redīī, Reditum" id="redeoredererediireditumtoreturntogoback">
                To Return / To Go Back
            </WordBox>

            <WordBox word="Sacerdos, Sacerdotis | 3rd Masculine" id="sacerdossacerdotispriest">
                Priest
            </WordBox>

            <WordBox word="Teneo, Tenēre, Tenuī, Tentum" id="teneoteneretenuitentumtohold">
                To Hold
            </WordBox>

            <WordBox word="Unda, Undae | 1st Feminine" id="undaundaewave">
                Wave
            </WordBox>

            <WordBox word="Vinco, Vincere, Vīcī, Victim" id="vincovincerevicivictimtowintobevictorioustoconquer">
                To Win / To Be Victorious / To Conquer
            </WordBox>

            <WordBox word="Aedifico, Aedificāre, Aedificāvī, Aedificātum" id="aedificoaedificareaedificaviaedificatumtobuild">
                To Build
            </WordBox>

            <WordBox word="Auxilium, Auxiliī | 2nd Neuter" id="auxiliumauxiliihelp">
                Help
            </WordBox>

            <WordBox word="Bonus, Bona, Bonum" id="bonusbonabonumgood">
                Good
            </WordBox>

            <WordBox word="Consentio, Consentīre, Consensī, Consentum" id="consentioconsentireconsensiconsentumtoagree">
                To Agree
            </WordBox>

            <WordBox word="Consilium, Consiliī | 2nd Neuter" id="consiliumconsiliiplanidea">
                Plan / Idea
            </WordBox>

            <WordBox word="Deinde" id="deindethen">
                Then
            </WordBox>

            <WordBox word="Delecto, Delectāre, Delectāvī, Delectātum" id="delectodelectaredelectavidelectatumtodelight">
                To delight
            </WordBox>

            <WordBox word="Effugio, Effugere, Effūgī, Effugiturum" id="effugioeffugereeffugieffugiturumtoescape">
                To Escape
            </WordBox>

            <WordBox word="Flow, Floris | 3rd Feminine" id="flowflorisflower">
                Flower
            </WordBox>

            <WordBox word="Imperator, Imperatoris | 3rs Masculine" id="imperatorimperatorisemperor">
                Emperor
            </WordBox>

            <WordBox word="Inter" id="interamong">
                Among
            </WordBox>

            <WordBox word="Ita" id="itainthiswaythisso">
                In this way / this / so
            </WordBox>

            <WordBox word="Melior" id="meliorbetter">
                Better
            </WordBox>

            <WordBox word="Navigo, Navigāre, Navigāvī, Navigātum" id="navigonavigarenavigavinavigatumtosail">
                To sail
            </WordBox>

            <WordBox word="Nonne?" id="nonne?surely?">
                Surely?
            </WordBox>

            <WordBox word="Pereo, Perīre, Periī, Peritum" id="pereoperireperiiperitumtodietoperish">
                To die / To perish
            </WordBox>

            <WordBox word="Pono, Ponere, Posuī, Positum" id="ponoponereposuipositumtoputtoplace">
                To put / To place
            </WordBox>

            <WordBox word="Postridie " id="postridieonthenextday">
                On the next day
            </WordBox>

            <WordBox word="Punio, Punīre, Punīvī, Punitum" id="puniopunirepunivipunitumtopunish">
                To Punish
            </WordBox>

            <WordBox word="Simulac / Simulatque" id="simulac/simulatqueassoonas">
                As soon as
            </WordBox>

            <WordBox word="Summus, Summa, Summum" id="summussummasummumhighestgreatesttop">
                Highest / Greatest / Top
            </WordBox>

            <WordBox word="Tollo, Tollere, Sustulī, Sublātum" id="tollotolleresustulisublatumtoraiseliftupdestroy">
                To Raise / Lift Up / Destroy
            </WordBox>

            <WordBox word="Vorto, Vortoro, Vortī, Vorsum" id="vortovortorovortivorsumtoturn">
                To Turn
            </WordBox>

            <WordBox word="Ā, Ab" id="aabfromby">
                From / By
            </WordBox>

            <WordBox word="Animus, Animī | 2nd Masculine" id="animusanimispiritsoulmind">
                Spirit / Soul / Mind
            </WordBox>

            <WordBox word="Appropinquo, Appropinquāre, Appropinquāvī, Approppinquātum" id="appropinquoappropinquareappropinquaviapproppinquatumtoapproachtocomenear">
                To Approach / To Come Near
            </WordBox>

            <WordBox word="Ara, Arae | 1st Feminine" id="araaraealtar">
                Altar
            </WordBox>

            <WordBox word="Bene" id="benewell">
                Well
            </WordBox>

            <WordBox word="Benignus, Benigna, Benignum" id="benignusbenignabenignumkind">
                Kind
            </WordBox>

            <WordBox word="Die" id="dieforalongtime">
                For a long time
            </WordBox>

            <WordBox word="Faber, Fabrī | 2nd Masculine" id="faberfabricraftsman">
                Craftsman
            </WordBox>

            <WordBox word="Facilis, Facilis, Facile" id="facilisfacilisfacileeasy">
                Easy
            </WordBox>

            <WordBox word="Graviter" id="graviterseriously">
                Seriously
            </WordBox>

            <WordBox word="Hūc" id="huchere,tothisplace">
                Here, to this place
            </WordBox>

            <WordBox word="Insula, Insulae | 1st Feminine" id="insulainsulaeisland">
                Island
            </WordBox>

            <WordBox word="Invitus, Invita, Invitum" id="invitusinvitainvitumunwilling">
                Unwilling
            </WordBox>

            <WordBox word="Itaque" id="itaqueandso">
                And So
            </WordBox>

            <WordBox word="Maximus, Maxima, Maximum" id="maximusmaximamaximumverybig">
                Very Big
            </WordBox>

            <WordBox word="Negotium, Negotiī | 2nd Neuter" id="negotiumnegotiibusiness">
                Business
            </WordBox>

            <WordBox word="Numquam" id="numquamnever">
                Never
            </WordBox>

            <WordBox word="Paucī, Paucae, Pauca" id="paucipaucaepaucafewafew">
                Few / A Few
            </WordBox>

            <WordBox word="Pervenio, Pervenīre, Pervēnī, Perventum" id="perveniopervenireperveniperventumtoreachtoarriveat">
                To Reach / To Arrive At
            </WordBox>

            <WordBox word="Quondam" id="quondamonedayonce">
                One Day / Once
            </WordBox>

            <WordBox word="Recipio, Recipere, Recēpī, Receptum" id="recipiorecipererecepireceptumtorecovertotakeback">
                To Recover / To Take Back
            </WordBox>

            <WordBox word="Resisto, Resistere, Restitī, Restitum" id="resistoresistererestitirestitumtoresist">
                To Resist
            </WordBox>

            <WordBox word="Audeo, Audēre, Ausus sum" id="audeoaudereausussumtodare">
                To Dare
            </WordBox>

            <WordBox word="Caput, Capitis | 3rd Neuter" id="caputcapitisheadchapter">
                Head / Chapter
            </WordBox>

            <WordBox word="Coepī, Coepisse" id="coepicoepissetohavebegun">
                To Have Begun
            </WordBox>

            <WordBox word="Cognosco, Cognoscere, Cognōvī, Cognōtum" id="cognoscocognoscerecognovicognotumtorecognizetorealizetolearn">
                To Recognize / To Realize / To Learn
            </WordBox>

            <WordBox word="Dea, Deae | 1st Feminine" id="deadeaetodemonstratetopointout">
                To Demonstrate / To Point Out
            </WordBox>

            <WordBox word="Discedo, Discedere, Discessī, Discessum" id="discedodiscederediscessidiscessumtoleavetodepart">
                To Leave / To Depart
            </WordBox>

            <WordBox word="Fortasse" id="fortasseperhaps">
                Perhaps
            </WordBox>

            <WordBox word="Ibi" id="ibithere">
                There
            </WordBox>

            <WordBox word="Libenter" id="libentergladly">
                Gladly
            </WordBox>

            <WordBox word="Manus, Manūs | 4th Feminine" id="manusmanushand">
                Hand
            </WordBox>

            <WordBox word="Miles, Milities | 3rd Masculine" id="milesmilitiessoldier">
                Soldier
            </WordBox>

            <WordBox word="Nam" id="namforbecause">
                For / Because
            </WordBox>

            <WordBox word="Nemo, Neminis | 3rd Masculine / Feminine" id="nemoneminisnoonenobody">
                No One / Nobody
            </WordBox>

            <WordBox word="Obsto, Obstāre, Obstitī, Obstitum" id="obstoobstareobstitiobstitumtobeinthewaytoobstruct">
                To Be In The Way / To Obstruct
            </WordBox>

            <WordBox word="Pars, Partis | 3rd Feminine" id="parspartisapart">
                A part
            </WordBox>

            <WordBox word="Peto, Petere, Petīvī, Petitum" id="petopeterepetivipetitumtoseektoasktoattack">
                To Seek / To Ask / To Attack
            </WordBox>

            <WordBox word="Posteā" id="posteaafterwards">
                Afterwards
            </WordBox>

            <WordBox word="Prō" id="proforonebehalfofbefore">
                For / One Behalf Of / Before
            </WordBox>

            <WordBox word="Quō" id="quowheretowhere">
                Where / To Where
            </WordBox>

            <WordBox word="Recuso, Recusāre, Recusāvī, Recusātum" id="recusorecusarerecusavirecusatumtorefuse">
                To Refuse
            </WordBox>

            <WordBox word="Soleo, Solēre" id="soleosoleretobeaccustomed">
                To Be Accustomed
            </WordBox>

            <WordBox word="Amo, Amāre, Amāvī, Amātum" id="amoamareamaviamatumtolove">
                To Love
            </WordBox>

            <WordBox word="Carus, Cara, Carum" id="caruscaracarumdear">
                Dear
            </WordBox>

            <WordBox word="Cogito, Cogitāre, Cogitāvī, Cogitātum" id="cogitocogitarecogitavicogitatumtothink">
                To Think
            </WordBox>

            <WordBox word="Comparo, Comparāre, Comparāvī, Comparātum" id="comparocompararecomparavicomparatumtocomposetocollecttoprovide">
                To Compose / To Collect / To Provide
            </WordBox>

            <WordBox word="Conficio, Conficere, Confēcī, Confectum" id="conficioconficereconfeciconfectumtocompletetofinish">
                To Complete / To Finish
            </WordBox>

            <WordBox word="Curo, Curāre, Curāvī, Curātum" id="curocurarecuravicuratumtocarefor">
                To Care For
            </WordBox>

            <WordBox word="Fluo, Fluere, Fluxī, Fluctum" id="fluofluerefluxifluctumtoflow">
                To Flow
            </WordBox>

            <WordBox word="Forte" id="fortebychance">
                By Chance
            </WordBox>

            <WordBox word="Gratiās ago, Agere, Egī, Actum" id="gratiasagoagereegiactumtothanktogivethanks">
                To Thank / To Give Thanks
            </WordBox>

            <WordBox word="Hasta, Hastae | 1st Feminine" id="hastahastaespear">
                Spear
            </WordBox>

            <WordBox word="Illūc" id="illuctothatplace">
                To That Place
            </WordBox>

            <WordBox word="Iter, Itineris | 3rd Neuter" id="iteritinerisjourneytraveltrip">
                Journey / Travel / Trip
            </WordBox>

            <WordBox word="Locus, Locī | 2nd Masculine" id="locuslociplacelocation">
                Place / Location
            </WordBox>

            <WordBox word="Mane" id="maneinthemorningearly">
                In The Morning / Early
            </WordBox>

            <WordBox word="Nōvī, Nōvisse" id="novinovissetoknowtoexperience">
                To Know / To Experience
            </WordBox>

            <WordBox word="Periculum, Periculī | 2nd Neuter" id="periculumpericulidanger">
                Danger
            </WordBox>

            <WordBox word="Plurimī, Plurimae, Plurima" id="plurimiplurimaeplurimamany">
                Many
            </WordBox>

            <WordBox word="Posco, Poscere, Poposcī" id="poscoposcerepoposcitodemandtoask">
                To Demand / To Ask
            </WordBox>

            <WordBox word="Tot" id="totsooften">
                So Often
            </WordBox>

            <WordBox word="Vexo, Vexāre, Vexāvī, Vexātum" id="vexovexarevexavivexatumtoannoy">
                To Annoy
            </WordBox>

            <WordBox word="Vivo, Vivere, Vīxī, Victum" id="vivoviverevixivictumtolive">
                To Live
            </WordBox>

            <WordBox word="Vox, Vocis | 3rd Feminine" id="voxvocisvoice">
                Voice
            </WordBox>

            <WordBox word="Arcesso, Arcessere, Arcessīvī, Arcessitum" id="arcessoarcesserearcessiviarcessitumtocollecttoprepare">
                To Collect / To Prepare
            </WordBox>

            <WordBox word="Ars, Artis | 3rd Feminine" id="arsartisartskill">
                Art / Skill
            </WordBox>

            <WordBox word="Crudelis, Crudelis, Crudele" id="crudeliscrudeliscrudelecruel">
                Cruel
            </WordBox>

            <WordBox word="Dēnique" id="deniqueatlastandthen">
                At Last / And Then
            </WordBox>

            <WordBox word="Despero, Desperāre, Desperāvī, Desperātum" id="desperodesperaredesperavidesperatumtodespair">
                To Despair
            </WordBox>

            <WordBox word="Doctus, Docta, Doctum" id="doctusdoctadoctumlearnedskilled">
                Learned / Skilled
            </WordBox>

            <WordBox word="Domus, Domūs̄ | 4th Feminine" id="domusdomushomehouse">
                Home / House
            </WordBox>

            <WordBox word="Infero, Inferre, Intulī, Inlatum" id="inferoinferreintuliinlatumtocarryintobearinto">
                To Carry In / To Bear Into
            </WordBox>

            <WordBox word="Libero, Liberāre, Liberāvī, Liberātum" id="liberoliberareliberaviliberatumtofree">
                To Free
            </WordBox>

            <WordBox word="Luna, Lunae | 1st Feminine" id="lunalunaemoon">
                Moon
            </WordBox>

            <WordBox word="Mors, Mortis | 3rd Feminine" id="morsmortisdeath">
                Death
            </WordBox>

            <WordBox word="Oculus, Oculī | 2nd Masculine" id="oculusoculieye">
                Eye
            </WordBox>

            <WordBox word="Persuadeo, Persuadēre, Persuasī, Persuasum" id="persuadeopersuaderepersuasipersuasumtopersuade">
                To Persuade
            </WordBox>

            <WordBox word="Pessimus, Pessima, Pessimum" id="pessimuspessimapessimumworst">
                Worst
            </WordBox>

            <WordBox word="Relinquo, Relinquere, Reliquī, Relictum" id="relinquorelinquerereliquirelictumtoleavetoabandon">
                To Leave / To Abandon
            </WordBox>

            <WordBox word="Sīcut" id="sicutjustas">
                Just As
            </WordBox>

            <WordBox word="Tam" id="tamso">
                So
            </WordBox>

            <WordBox word="Temptto, Temptāre, Temptāvī, Temptātum" id="tempttotemptaretemptavitemptatumtotry">
                To Try
            </WordBox>

            <WordBox word="Vulnus, Vulneris | 3rd Neuter" id="vulnusvulneriswound">
                Wound
            </WordBox>

            <WordBox word="Adiuvo, Adiuvāre, Adiuvāvī, Adiuvātum" id="adiuvoadiuvareadiuvaviadiuvatumtohelp">
                To Help
            </WordBox>

            <WordBox word="Annus, Annī | 2nd Masculine" id="annusanniyear">
                Year
            </WordBox>

            <WordBox word="Celo, Celāre, Celāvī, Celātum" id="celocelarecelavicelatumtohidetoconceal">
                To Hide / To Conceal
            </WordBox>

            <WordBox word="Circum" id="circumaround">
                Around
            </WordBox>

            <WordBox word="Durus, Dura, Durum" id="durusduradurumhardharsh">
                Hard / Harsh
            </WordBox>

            <WordBox word="Efficio, Efficere, Effēcī, Effectum" id="efficioefficereeffecieffectumtoaccomplish">
                To Accomplish
            </WordBox>

            <WordBox word="Fons, Fontis | 3rd Masculine" id="fonsfontisfountain">
                Fountain
            </WordBox>

            <WordBox word="Gravis, Gravis, Grave" id="gravisgravisgraveseriousgrave">
                Serious / Grave
            </WordBox>

            <WordBox word="Hora, Horae | 1st Feminine" id="horahoraehour">
                Hour
            </WordBox>

            <WordBox word="Infelix, Infelix, Infelix" id="infelixinfelixinfelixunlucky">
                Unlucky
            </WordBox>

            <WordBox word="Lubeo, Lubēre, Lussī, Lussum" id="lubeoluberelussilussumtoorder">
                To Order
            </WordBox>

            <WordBox word="Morbus, Morbī | 2nd Masculine" id="morbusmorbideathdiseasesickness">
                Death / Disease / Sickness
            </WordBox>

            <WordBox word="Nunnullī, Nonnullae, Nonnulla" id="nunnullinonnullaenonnullasome">
                Some
            </WordBox>

            <WordBox word="Nuper" id="nuperrecently">
                Recently
            </WordBox>

            <WordBox word="Oppidum, Oppidī | 2nd Neuter" id="oppidumoppiditown">
                Town
            </WordBox>

            <WordBox word="Plenus, Plena, Plenum" id="plenusplenaplenumfull">
                Full
            </WordBox>

            <WordBox word="Plus, Pluris | 3rd Neuter" id="plusplurismore">
                More
            </WordBox>

            <WordBox word="Pretium, Pretiī | 2nd Neuter" id="pretiumpretiipricereward">
                Price / Reward
            </WordBox>

            <WordBox word="Sacer, Sacra, Sacrum" id="sacersacrasacrumholysacred">
                Holy / Sacred
            </WordBox>

            <WordBox word="Sapiens, Sapiens, Sapiens" id="sapienssapienssapienswise">
                Wise
            </WordBox>

            <WordBox word="Unde" id="undewhencefromwhere">
                Whence / From Where
            </WordBox>

        </Container>
    </Layout>
)

function search() {
    console.log("Salve, ego Michael sum")
    let input = document.getElementById('searchbar').value.toLowerCase()
    let indexID = document.getElementsByClassName('css-f8n5zr')
    let words = document.getElementsByClassName('css-1oiguqt')
    for (let i = 0; i < words.length; i++) {
        if (!indexID[i].innerHTML.toLowerCase().includes(input)) {
            words[i].style.display = 'none'
        } else {
            words[i].style.display = 'block'
        }
    }
}

export default Vocabulary
