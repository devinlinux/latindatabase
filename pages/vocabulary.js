import Layout from '../components/layouts/article'
import { Input, Container, useColorModeValue } from '@chakra-ui/react'
import { WordBox } from '../components/wordbox'

const Vocabulary = () => (
    <Layout>
        <Container>
            <Input placeholder='Search Word' onKeyUp={search} id="searchbar" borderColor={useColorModeValue('#ABADB6', 'whiteAlpha.400')}></Input>

            <WordBox word="Canis, Canis | 3rd Common" id="canisdog">
                Dog
            </WordBox>

            <WordBox word="Coquus, Coquī | 2nd Masculine" id="coquuschef">
                Chef
            </WordBox>

            <WordBox word="Est (Sum, esse, fuī, futurum)" id="esttobe">
                Is / To Be
            </WordBox>

            <WordBox word="Fillia, Fillae | 1st Feminine" id="filliadaughter">
                Daughter
            </WordBox>

            <WordBox word="Filius, Filiī | 2nd Masculine" id="filiusson">
                Son
            </WordBox>

            <WordBox word="Hortus, Hortī | 2nd Masculine" id="hortusgarden">
                Garden
            </WordBox>

            <WordBox word="In (+ ablative)" id="ininonintoonto">
                In / On / Into / Onto
            </WordBox>

            <WordBox word="Laboro, Laborāre, Laborāvī, Laborātum" id="laboraretowork">
                To Work
            </WordBox>

            <WordBox word="Mater, Matris | 3rd Feminine" id="matermother">
                Mother
            </WordBox>

            <WordBox word="Pater, Patris | 3rd Masculine" id="paterfather">
                Father
            </WordBox>

            <WordBox word="Sedeo, Sedēre, Sessī, Sessum" id="sederetosit">
                To Sit
            </WordBox>

            <WordBox word="Via, Viae | 1st Feminine" id="viaroadstreet">
                Road / Street / Way
            </WordBox>

            <WordBox word="Amicus, Amīcī | 2nd Masculine" id="amicusfriend">
                Friend
            </WordBox>

            <WordBox word="Ancilla, Ancillae | 1st Feminine" id="ancillaslavegirl">
                Slave Girl
            </WordBox>

            <WordBox word="Cena, Cenae | 1st Feminine" id="cenadinner">
                Dinner
            </WordBox>

            <WordBox word="Dominus, Dominī | 2nd Masculine" id="dominusmaster">
                Master
            </WordBox>

            <WordBox word="Cibus, Cibī | 2nd Masculine" id="cibusfood">
                Food
            </WordBox>

            <WordBox word="Dormio, Dormīre, Dormīvī, Dormitum" id="dormiretosleep">
                To Sleep
            </WordBox>

            <WordBox word="Intro, Intrāre, Intrāvī, Intrātum" id="intraretoenter">
                To Enter
            </WordBox>

            <WordBox word="Laetus, Laeta, Laetum" id="laetushappy">
                Happy
            </WordBox>

            <WordBox word="Laudo, Laudāre, Laudāvī, Laudātum" id="laudaretopraise">
                To Praise
            </WordBox>

            <WordBox word="Mercator, Mercatoris | 3rd Masculine" id="mercatormerchant">
                Merchant
            </WordBox>

            <WordBox word="Quoque" id="quoquealsotoo">
                Also / too
            </WordBox>

            <WordBox word="Saluto, Salutāre, Salutāvī, Salutātum" id="salutaretogreey">
                To Greet
            </WordBox>

            <WordBox word="Ad (+ Acusative)" id="adto">
                To
            </WordBox>

            <WordBox word="Bibo, Bibere, Bibī, Bibitum" id="biberetodrink">
                To Drink
            </WordBox>

            <WordBox word="Circumspecto, Circumspectāre, Circumspectāvī, Circumspectātum" id="clamaretoshout">
                To Look Around
            </WordBox>

            <WordBox word="Clamo, Clamāre, Clamāvī, Clamātum" id="clamaretoshout">
                To Shout
            </WordBox>

            <WordBox word="Ecce" id="eccelook">
                Look
            </WordBox>

            <WordBox word="Et" id="etand">
                And
            </WordBox>

            <WordBox word="Exeo, Exīre, Exīvī, Exitum" id="exiretogooutleave">
                To go out
            </WordBox>

            <WordBox word="Exspecto, Exspectāre, Exspectāvī, Exspectātum" id="expectaretowaitfor">
                To Wait For
            </WordBox>

            <WordBox word="Ianua, Ianuae | 1st Feminine" id="ianuadoor">
                Door
            </WordBox>

            <WordBox word="Iratus, Irata, Iratum" id="iratusangry">
                Angry
            </WordBox>

            <WordBox word="Leo, Leonis | 3rd Common" id="leolion">
                Lion
            </WordBox>

            <WordBox word="Magnus, Magna, Magnum" id="magnusbiglargegreat">
                Big / Large / Great
            </WordBox>

            <WordBox word="Navis, Navis | 3rd Feminine" id="navisship">
                Ship
            </WordBox>

            <WordBox word="Nōn" id="nonnot">
                Not
            </WordBox>

            <WordBox word="Porto, Portāre, Portāvī, Portātum" id="portaretocarry">
                To Carry
            </WordBox>

            <WordBox word="Respondeo, Respondēre, Respondī, Responsum" id="respondeotoreply">
                To Reply
            </WordBox>

            <WordBox word="Rideo, Ridēre, Rīsī, Rīsum" id="rideretolaughtosmile">
                To Laugh / To Smile
            </WordBox>

            <WordBox word="Salveo, Salvēre" id="salverehellotobewell">
                Hello / To be well
            </WordBox>

            <WordBox word="Surgo, Surgere, Surrexī, Surrectum" id="surgeretogetuptostanduptosurge">
                To get up / To stand up
            </WordBox>

            <WordBox word="Taberna, Tabernae | 1st Feminine" id="tabernashopstoreinn">
                Shop / Store / Inn
            </WordBox>

            <WordBox word="Video, Vidēre, Vīdī, Vīsum" id="videretosee">
                To See
            </WordBox>

            <WordBox word="Vinum, Vinī | 2nd Neuter" id="vinumwine">
                Wine
            </WordBox>

            <WordBox word="Ago, Agere, Egī, Actum" id="agereegidoestodo">
                Does / To Do
            </WordBox>

            <WordBox word="Anulus, Anulī | 2nd Masculine" id="anulusring">
                Ring
            </WordBox>

            <WordBox word="Coquo, Coquere, Coxī, Coctum" id="coqueretocook">
                To Cook
            </WordBox>

            <WordBox word="Cur" id="curwhy">
                Why
            </WordBox>

            <WordBox word="Ē, Ex" id="eexfromoutof">
                From / Out of
            </WordBox>

            <WordBox word="Ego, Meī | 1st Common" id="egomeii ">
                I
            </WordBox>

            <WordBox word="Eheu"  id="ehueohno">
                Oh No
            </WordBox>

            <WordBox word="Habeo, Habēre, Habuī, Habitum" id="haberetohave">
                To Have
            </WordBox>

            <WordBox word="Inquit" id="inquitsays">
                Says
            </WordBox>

            <WordBox word="Iudex, Iudicis | 3rd Masculine" id="iudexjudge">
                Judge
            </WordBox>

            <WordBox word="Medaxm, Mendacis | 3rd Common" id="mendaxliar">
                Liar
            </WordBox>

            <WordBox word="Pecunia, Pecuniae | 1st Feminine" id="pecuniamoney">
                Money
            </WordBox>

            <WordBox word="Perterritus, Perterrita, Perterritum" id="perterritusterrified">
                Terrified
            </WordBox>

            <WordBox word="Poeta, Poetae | 1st Masculine" id="poetapoet">
                Poet
            </WordBox>
            
            <WordBox word="Quaero, Quaerere, Quaesīvī, Quaesitum" id="quaereretosearchfortolookfor">
                To Look For / To Search For
            </WordBox>
            
            <WordBox word="Quis" id="quiswho">
                Who
            </WordBox>

            <WordBox word="Reddo, Reddere, Reddidī, Redditum" id="redderetogiveback">
                To Give Back
            </WordBox>

            <WordBox word="Satis" id="satisenough">
                Enough
            </WordBox>

            <WordBox word="Sed" id="sedbut">
                But
            </WordBox>

            <WordBox word="Signum, Signī | 2nd Neuter" id="signumsignseal">
                Sign / Seal
            </WordBox>

            <WordBox word="Tu, Tuī" id="tuyou">
                You
            </WordBox>

            <WordBox word="Voco, Vocāre, Vocāvī, Vocātum" id="vocaretocall">
                To Call
            </WordBox>

            <WordBox word="Adsum, Adess, Adfuī, Adfuturum" id="adesttoisherebehere">
                Is Here / To Be Here
            </WordBox>

            <WordBox word="Adsum, Adesse, Adfuī, Adfuturum" id="adsuntareheretobehere">
                Are Here / To Be Here
            </WordBox>

            <WordBox word="Agricola, Agricolae | 1st Masculine" id="agricolafarmer">
                Farmer
            </WordBox>

            <WordBox word="Ambulo, Ambulāre, Ambulāvī, Ambulātum" id="ambularetowalk">
                To Walk
            </WordBox>

            <WordBox word="Audio, Audīre, Audīvī, Auditum" id="audiretoheartolistento">
                To Hear / To Listen To
            </WordBox>

            <WordBox word="Clamor, Clamoris | 3rd Masculine" id="clamorshoutuproar">
                Shout / Uproar
            </WordBox>

            <WordBox word="Contendo, Contendere, Contendī, Contentum" id="contenderetohurry">
                To Hurry
            </WordBox>

            <WordBox word="Curro, Currere, Cucurrī, Cursum" id="curreretorun">
                To Run
            </WordBox>

            <WordBox word="Fabula, Fabulae | 1st Feminine" id="fabulaaplayastory">
                A Play / A Story
            </WordBox>

            <WordBox word="Femina, Feminae | 1st Feminine" id="feminawoman">
                Woman
            </WordBox>

            <WordBox word="Hodiē" id="hodietoday">
                Today
            </WordBox>

            <WordBox word="Iuvenis, Iuvenis | 3rd Masculine" id="iuvenisyoungman">
                Young Man
            </WordBox> 

            <WordBox word="Meus, Mea, Meum" id="meusmeameummymine">
                My / Mine
            </WordBox>

            <WordBox word="Multus, Multa, Multum" id="multusmuch">
                Much
            </WordBox>

            <WordBox word="Multus, Multa, Multum" id="multusmany">
                Many
            </WordBox>

            <WordBox word="Optimus, Optima, Optimum" id="optimusverygoodexcellentbest">
                Very Good / Excellent / Best
            </WordBox>

            <WordBox word="Peto, Petere, Petīvī, Petitum" id="peteretoheadfortoattack">
                To Head For / To Attack
            </WordBox>

            <WordBox word="Plaudo, Plaudere, Plausī, Plausum" id="plauderetoapplaudtoclap">
                To Applaud / To Clap
            </WordBox>

            <WordBox word="Senex, Senis | 3rd Masculine" id="senexoldman">
                Old Man
            </WordBox>

            <WordBox word="Specto, Spectāre, Spectāvī, Spectātum" id="spectaretowatchtolookat">
                To Look At / To Watch
            </WordBox>

            <WordBox word="Sto, Stare, Stetī, Statum" id="statstaretostand">
                To Stand
            </WordBox>

            <WordBox word="Turba, Turbae | 1st Feminine" id="turbacrowd">
                Crowd
            </WordBox>

            <WordBox word="Ubi" id="ubiwhenwhere">
                When / Where
            </WordBox>

            <WordBox word="Urbs, Urbis | 3rd Feminine" id="urbscity">
                City
            </WordBox>

            <WordBox word="Venio, Venīre, Vēnī, Ventum" id="veniretocome">
                To Come
            </WordBox>

            <WordBox word="Absum, Abesse, Afuī, Afuturum" id="abesseabestisoutisabsenttobeouttobeabsent">
                To Be Out / To Be Absent / Is Out / Is Absent
            </WordBox>

            <WordBox word="Absum, Abesse, Afuī, Afuturum" id="abesseaberatwasoutwasabsemttpbeouttobeabsent">
                To Be Out / To Be Abemt / Was Out / Was Absent
            </WordBox>
            
            <WordBox word="Cubiculum, Cubiculī" id="cubiculumbedroom">
                Bedroom
            </WordBox>

            <WordBox word="Emo, Emere, Emī, Emptum" id="emeretobuy">
                To Buy
            </WordBox>

            <WordBox word="Ferociter" id="ferociterfiercely">
                Fiercely
            </WordBox>

            <WordBox word="Festino, Festināre, Festināvī, Festinātum" id="festinaretohurry">
                To Hurry
            </WordBox>

            <WordBox word="Fortis, Fortis, Forte" id="fortisbrave">
                Brave
            </WordBox>

            <WordBox word="Fur, Furis | 3rd Masculine" id="furthief">
                Thief
            </WordBox>

            <WordBox word="Intentē" id="intenteintentlycarefully">
                Intently / Carefully
            </WordBox>

            <WordBox word="Libertus, Libertī | 2nd Masculine" id="libertusfreedmanexslave">
                Freedman / Ex-Slave
            </WordBox>

            <WordBox word="Olim" id="olimonesometimeagoonceuponatime">
                Once / Some Time Ago / Once Upon A Time
            </WordBox>

            <WordBox word="Parvus, Parva, Parvum" id="parvussmall">
                Small
            </WordBox>

            <WordBox word="Per" id="perthrough">
                Through
            </WordBox>

            <WordBox word="Postquam" id="postquamafter">
                After
            </WordBox>

            <WordBox word="Pulso, Pulsāre, Pulsāvī, Pulsātum" id="pulsattohittopunch">
                To Hit / To Punch
            </WordBox>

            <WordBox word="Quod" id="qudobecause">
                Because
            </WordBox>

            <WordBox word="Res, Reī | 5th Feminine" id="resthing">
                Thing
            </WordBox>

            <WordBox word="Scribo, Scribere, Scripsī, Scriptum" id="scriberetowrite">
                To Write
            </WordBox>

            <WordBox word="Subito" id="subitosuddenly">
                Suddenly
            </WordBox>

            <WordBox word="Supero, Superāre, Superāvī, Superātum" id="superaretoovercometooverpower">
                To Overcome / To Overpower
            </WordBox>

            <WordBox word="Tum" id="tumthen">
                Then
            </WordBox>

            <WordBox word="Tuus, Tua, Tuum" id="tuustuatuumyouryours">
                Your / Yours
            </WordBox>

            <WordBox word="Vendo, Vendere, Vendidī, Venditum" id="venderetosell">
                To Sell
            </WordBox>

            <WordBox word="Vitupero, Vituperāre, Vituperāvī, Vituperātum" id="vituperaretoblametocurse">
                To Blame / To Curse
            </WordBox>

            <WordBox word="Ceno, Cenāre, Cenāvī, Cenātum" id="cenaretoeattodine">
                To Eat / To Dine
            </WordBox>

            <WordBox word="Cum" id="cumwith">
                With
            </WordBox>

            <WordBox word="Facio, Facere, Fēcī, Factum" id="faceretoamaketodo">
                To Make / To Do
            </WordBox>

            <WordBox word="Heri" id="heriyesterday">
                Yesterday
            </WordBox>

            <WordBox word="Ingens, Ingentis" id="ingenshuge">
                Huge
            </WordBox>

            <WordBox word="Intelligo, Intelligere, Intellēxī, Intellectum" id="intelligeretounderstand">
                To Understand
            </WordBox>

            <WordBox word="Lacrimo, Lacrimāre, Lacrimāvī, Lacrimātum" id="lacrimaretoweeptocry">
                To Weep / To Cry
            </WordBox>

            <WordBox word="Mortuus, Mortua, Mortuum" id="mortuusmortuamortuumdead">
                Dead
            </WordBox>

            <WordBox word="Narro, Narrāre, Narrāvī, Narrātum" id="narraretotelltorelate">
                To Tell / To Relate
            </WordBox>

            <WordBox word="Nihil" id="nihilnothing">
                Nothing
            </WordBox>

            <WordBox word="Neco, Necāre, Necāvī, Necātum" id="necaretokill">
                To Kill
            </WordBox>

            <WordBox word="Omnis, Omnis, Omne" id="omniseveryall">
                Every All
            </WordBox>

            <WordBox word="Paro, Parāre, Parāvī, Parātum" id="pararetoprepare">
                To Prepare
            </WordBox>

            <WordBox word="Prope" id="propenear">
                Near
            </WordBox>

            <WordBox word="Rogo, Rogāre, Rogāvī, Rogātum" id="rogaretoask">
                To Ask
            </WordBox>

            <WordBox word="Tacitē" id="quietly">
                Quietly
            </WordBox>

            <WordBox word="Tamen" id="tamenneverthelesshowever">
                However / Nevertheless
            </WordBox>

            <WordBox word="Terreo, Terrēre, Terruī, Territum" id="terreretofrightentoscare">
                To Frighten / To Scare
            </WordBox>

            <WordBox word="Valdē" id="valdeverymuch">
                Very Much
            </WordBox>

            <WordBox word="Agito, Agitāre, Agitāvī, Agitatum" id="agitaretochasetohunt">
                To Chase / To Hunt
            </WordBox>

            <WordBox word="Consumo, Consumere, Consumpsī, Consumptum" id="comsumeretoeat">
                To Eat
            </WordBox>

            <WordBox word="Duco, Ducere, Duxi, Ductum" id="duceretoleadtotake">
                To Lead / To Take
            </WordBox>

            <WordBox word="Eum" id="eumhim">
                Him
            </WordBox>

            <WordBox word="Ferox, Ferocis" id="feroxfierce">
                Fierce
            </WordBox>

            <WordBox word="Gladius, Gladiī | 2nd Masculine" id="gladiussword">
                Sword
            </WordBox>

            <WordBox word="Hic, Haec, Hoc" id="hicheachocthis">
                This
            </WordBox>

            <WordBox word="Ignavus, Ignava, Ignavum" id="ignavusignavaignavumcowardly">
                Cowardly
            </WordBox>

            <WordBox word="Nuntius, Nuntiī | 2nd Masculine" id="nuntiusmessenger">
                Messenger
            </WordBox>

            <WordBox word="Pes, Pedis | 3rd Masculine" id="pesfoot">
                Foot
            </WordBox>

            <WordBox word="Porta, Portae | 1st Feminine" id="portagate">
                Gate
            </WordBox>

            <WordBox word="Postulo, Postulāre, Postulāvī, Postulātum" id="postularetodemand">
                To Demand
            </WordBox>

            <WordBox word="Puer, Puerī" id="puerboy">
                Boy
            </WordBox>

            <WordBox word="Pugno, Pugnāre, Pugnāvī, Pugnātum" id="pugnaretofight">
                To Fight
            </WordBox>

            <WordBox word="Saepae" id="saepaeoften">
                Often
            </WordBox>

            <WordBox word="Sanguis, Sanguinis | 3rd Masculine" id="sanguisblood">
                Blood
            </WordBox>

            <WordBox word="Silva, Silvae | 1st Feminine" id="silvawoodsforest">
                Woods / Forest
            </WordBox>

            <WordBox word="Spectaculum, Spectaculī | 2nd Neuter" id="spectaculumshowspectacle">
                Show / Spectacle
            </WordBox>

            <WordBox word="Statim" id="statimatonceimmeadiately">
                At Once / Immediately
            </WordBox>

            <WordBox word="Totus, Tota, Totum" id="totustotatotumwhole">
                Whole
            </WordBox>

            <WordBox word="Agnosco, Agnoscere, Agnōvī, Agnitum" id="agnosceretorecognize">
                To Recognize
            </WordBox>

            <WordBox word="Celeriter" id="celeriterquickly">
                Quickly
            </WordBox>

            <WordBox word="Cupio, Cupere, Cupīvī, Cupitum" id="cuperetowant">
                To Want
            </WordBox>

            <WordBox word="Do, Dare, Dedī, Datum" id="daretogive">
                To Give
            </WordBox>

            <WordBox word="Diēs, Dieī | 5th Masculine" id="diesday">
                Day
            </WordBox>

            <WordBox word="Emitto, Emittere, Emīsī, Emissum" id="emitteretosendtosetout">
                To Throw / To Send Out
            </WordBox>

            <WordBox word="Fero, Ferre, Tulī, Latum" id="ferretobringtocarry">
                To Bring / To Carry
            </WordBox>

            <WordBox word="Homo | 3rd Masculine" id="homohumanbeingman">
                Human Being / Man
            </WordBox>

            <WordBox word="Hospes, Hospitis" id="hospesguest">
                Guest
            </WordBox>

            <WordBox word="Ille, Illa, Illud" id="illeillailludthat">
                That
            </WordBox>

            <WordBox word="Inspicio, Inspicere, Inspexī, Inspectum" id="inspiceretolookattoexamine">
                To Look At / To Examine
            </WordBox>

            <WordBox word="Iterum" id="iterumagain">
                Again
            </WordBox>

            <WordBox word="Maneo, Manēre, Mansī, Mansurum" id="maneretoremaintostay">
                To Remain / To Stay
            </WordBox>

            <WordBox word="Medius, Media, Medium" id="mediusmediamediummiddleof">
                Middle Of
            </WordBox>

            <WordBox word="Mox" id="moxsoon">
                Soon
            </WordBox>

            <WordBox word="Offero, Offere, Obtulī, Oblatum" id="offeretooffer">
                To Offer
            </WordBox>

            <WordBox word="Ostendo, Ostendere, Ostendī, Ostentum" id="ostenderetoshow">
                To Show
            </WordBox>

            <WordBox word="Post" id="postafter">
                After
            </WordBox>

            <WordBox word="Procedo, Procedere, Processī, Processum" id="procederetoproceedtoadvance">
                To Proceed To Advance
            </WordBox>

            <WordBox word="Pulcher, Pulchra, Pulchrum" id="pulcherpulchrapulchrumbeautiful">
                Beautiful
            </WordBox>

            <WordBox word="Revenio, Revenīre, Revēnī, Reventum" id="reveniretocomebacktoreturn">
                To Come Back / To Return
            </WordBox>

            <WordBox word="Trado, Tradere, Tradidī, Traditum" id="traderetohandover">
                To Hand Over
            </WordBox>

            <WordBox word="Capio, Capere, Cēpī, Captum" id="caperetotake">
                To Take
            </WordBox>

            <WordBox word="Civis, Civis | 3rd Masculine or Feminine" id="civiscivis">
                Citizen
            </WordBox>

            <WordBox word="Convenio, Convenīre, Convēnī, Conventum" id="convenire">
                To Gather / To Meet
            </WordBox>

            <WordBox word="Credo, Credere, Credidī, Creditum" id="crederetotrusttobelieve">
                To Trust / To Believe
            </WordBox>

            <WordBox word="Dē" id="deabout">
                About
            </WordBox>

            <WordBox word="Faveo, Favēre, Favī, Fautum" id="faveretosupport">
                To Support
            </WordBox>

            <WordBox word="Invito, Invitāre, Invitāvī, Invitātum" id="invitaretoinvite">
                To Invite
            </WordBox>

            <WordBox word="Eo, īre, iī, itum" id="ireittogo">
                To Go
            </WordBox>

            <WordBox word="Lego, Legere, Lēgī, Lectum" id="legeretoread">
                To Read
            </WordBox>

            <WordBox word="Līberalis, Līberalis, Līberale" id="liberalisliberalisliberalegenerous">
                Generous
            </WordBox>

            <WordBox word="Minimē" id="minimeno">
                No
            </WordBox>

            <WordBox word="Ita vero" id="itaveroyesindeed">
                Yes Indeed
            </WordBox>

            <WordBox word="Murus, Murī" id="muruswall">
                Wall
            </WordBox>

            <WordBox word="Noster, Nostra, Nostrum" id="nosternostranostrumout">
                Our
            </WordBox>

            <WordBox word="Nunc" id="nuncnow">
                Now
            </WordBox>

            <WordBox word="Placeo, Placēre, Placuī, Placitum" id="placeretoplease">
                To Please
            </WordBox>

            <WordBox word="Primus, Prima, Primum" id="first">
                First
            </WordBox>

            <WordBox word="Promitto, Promittere, Promīsī, Promissum" id="promitteretopromise">
                To Promise
            </WordBox>

            <WordBox word="Pugna, Pugnaet | 1st Feminine" id="pugnafight">
                Fight
            </WordBox>

            <WordBox word="Senator, Senatoris | 3rd Masculine" id="senatorsenator">
                Senator
            </WordBox>

            <WordBox word="Sollicitus, Sollicita, Sollicitum" id="sollicitussollicitasollicitumworriedanxious">
                Worried / Anxious
            </WordBox>

            <WordBox word="Stultus, Stulta, Stultum" id="stultusstultastultumstupid">
                Stupid
            </WordBox>

            <WordBox word="Valē" id="valegoodbye">
                Good-Bye
            </WordBox>

            <WordBox word="Verbero, Verberāre, Verberāvī, Verberātum" id="verberaretostriketobeat">
                To Strike / To Beat
            </WordBox>

            <WordBox word="Vir, Virī | 2nd Masculine" id="virman">
                Man
            </WordBox>

            <WordBox word="Amitto, Amittere, Amīsī, Amissum" id="amitteretolose">
                To Lose
            </WordBox>

            <WordBox word="Compleo, Complēre, Complēvī, Complētum" id="compleretofill">
                To Fill
            </WordBox>

            <WordBox word="Custodio, Custodīre, Custodīvī, Custoditum" id="custodiretoguard">
                To Guard
            </WordBox>

            <WordBox word="Epistula, Epistulae | 1st Feminine" id="epistulaepistleletter">
                Letter
            </WordBox>

            <WordBox word="Flamma, Flammae | 1st Feminine" id="flammaflame">
                Flame
            </WordBox>

            <WordBox word="Fortiter" id="fortiterbravely">
                Bravely
            </WordBox>

            <WordBox word="Frustrā" id="fristrainvain">
                In Vain
            </WordBox>

            <WordBox word="Fugio, Fugere, Fūgī, Fugiturum" id="fugeretorunawaytoflee">
                To Run Away / To Flee
            </WordBox>

            <WordBox word="Fundus, Fundī | 2nd Masculine" id="fundusfarm">
                Farm
            </WordBox>

            <WordBox word="Iaceo, Iacēre, Iacuī, Iacitum" id="iaceretoliedown">
                To Lie Down
            </WordBox>

            <WordBox word="Iam" id="iamnow">
                Now
            </WordBox>

            <WordBox word="Igitur" id="igiturtherefore">
                Therefore
            </WordBox>

            <WordBox word="Mirabilis, Mirabilis, Mirabile" id="mirabilismirabilismirabilestrageextraordinary">
                Strange / Ordinary
            </WordBox>

            <WordBox word="Mitto, Mittere, Mīsī, Missum" id="mitteretosend">
                To Send
            </WordBox>

            <WordBox word="Mons, Montis" id="monsmountain">
                Mountain
            </WordBox>

            <WordBox word="Optimē" id="optimeverywell">
                Very Well
            </WordBox>

            <WordBox word="Paene" id="paenenearlyalmost">
                Nearly / Almost
            </WordBox>

            <WordBox word="Sentio, Sentīre, Sensī, Sensum" id="sentiretofeel">
                To Feel
            </WordBox>

            <WordBox word="Tandem" id="tandematlast">
                At last
            </WordBox>

            <WordBox word="Templum, Templī | 2nd Neuter" id="templumtemple">
                Temple
            </WordBox>

            <WordBox word="Terra, Terrae" id="terragroundland">
                Ground / Land
            </WordBox>

            <WordBox word="Timeo, Timēre, Timuī" id="timeretobeafraidoftofear">
                To Be Afraid Of / To Fear
            </WordBox>

            <WordBox word="Abeo, Abīre, Abīī, Abitum" id="abiretogoaway">
                To Go Away
            </WordBox>

            <WordBox word="Accipio, Accipere, Accēpī, Acceptum" id="acciperetoaccept">
                To Accept
            </WordBox>

            <WordBox word="Callidus, Callida, Callidum" id="cakkiduscallidacallidumclevercunning">
                Clever / Cunning
            </WordBox>

            <WordBox word="Contentus, Contenta, Contentum" id="contentuscontentacontentumsatisfied">
                Satisfied
            </WordBox>

            <WordBox word="Exclamo, Exclamāre, Exclamāvī, Exclāmātum" id="exclamaretoexclaim">
                To Exclaim
            </WordBox>

            <WordBox word="Frater, Fratris" id="fraterbrother">
                Brother
            </WordBox>

            <WordBox word="Habito, Habitāre, Habitāvī, Habitatum" id="habitaretolivein">
                To Live (in)
            </WordBox>

            <WordBox word="Imperium, Imperiī" id="imperiumempirepower">
                Empire / Power
            </WordBox>

            <WordBox word="Invenio, Invenīre, Invēnī, Inventum" id="inveniretofind">
                To Find
            </WordBox>

            <WordBox word="Liber, Librī | 2nd Masculine" id="liberbook">
                Book
            </WordBox>

            <WordBox word="Nos" id="noswe">
                We
            </WordBox>

            <WordBox word="Nuntio, Nuntiāre, Nuntiāvī, Nuntiātum" id="nuntiaretoannounce">
                To Announce
            </WordBox>

            <WordBox word="Pax, Pacis | 3rs Feminine" id="paxpeace">
                Peace
            </WordBox>

            <WordBox word="Portus, Portūs | 4th Masculine" id="portusharbor">
                Harbour
            </WordBox>

            <WordBox word="Quam" id="quamthan">
                Than
            </WordBox>

            <WordBox word="semper" id="semperalways">
                Always
            </WordBox>

            <WordBox word="Servo, Servāre, Servāvī, Servātum" id="servaretosavetolookafter">
                To Save / To Look After
            </WordBox>

            <WordBox word="Solus, Sola, Solum" id="solussolasolumalone">
                Alone
            </WordBox>

            <WordBox word="Taceo, Tacēre, Tacuī, Tacitum" id="taceretobesilenttobequiet">
                To Be Silent To Be Quiet
            </WordBox>

            <WordBox word="Uxor, Uxoris" id="uxorwife">
                Wife
            </WordBox>

            <WordBox word="Vehementer" id="vehementerviolentlyloudly">
                Violently / Loudly
            </WordBox>

            <WordBox word="Vos" id="vosyouall">
                You All
            </WordBox>

        </Container>
    </Layout>
)

function search() {
    console.log("hello")
    let input = document.getElementById('searchbar').value.toLowerCase()
    let words = document.getElementsByClassName('css-1oiguqt')
    console.log(words.length)
    for (let i = 0; i < words.length; i++) {
        console.log(words[i])
        if (!words[i].innerHTML.toLowerCase().includes(input)) {
            words[i].style.display='none'
        } else {
            words[i].style.display='block'
        }
    }
}

export default Vocabulary