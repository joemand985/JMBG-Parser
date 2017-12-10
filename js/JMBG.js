var jmbg = [];
var num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12;
var d, m, g, r, b, k = "";
var jmbgString = [];
var reg = "";
var msg = document.getElementById("text");


function parseJMBG(){
        jmbg = document.getElementById("inputjmbg").value;

    if (jmbg.length === 13){



    jmbgs = jmbg.toString();
    num0 = jmbg[0];
    num1 = jmbg[1];
    num2 = jmbg[2];
    num3 = jmbg[3];
    num4 = jmbg[4];
    num5 = jmbg[5];
    num6 = jmbg[6];
    num7 = jmbg[7];
    num8 = jmbg[8];
    num9 = jmbg[9];
    num10 = jmbg[10];
    num11 = jmbg[11];
    num12 = jmbg[12];
    
    d = jmbgs[0]+jmbgs[1];
    m = jmbgs[2] + jmbgs[3];
    g = jmbgs[4] + jmbgs[5] + jmbgs[6];
    r = jmbgs[7] + jmbgs[8];
    b = jmbgs[9] + jmbgs[10] + jmbgs[11];
   
    var pol = "muški"
    if(b>499){
        pol = "ženski"
    }
    
    
    switch(parseInt(r)){
   
        case 1:
            reg = "BiH"
            break;
        case 2:
            reg = "Crnoj Gori"
            break;
        case 3:
            reg = "Hrvatskoj"
            break;
        case 4: 
            reg = "Makedoniji"
            break;
        case 5: 
            reg = "Sloveniji"
            break;
        case 7:
            reg = "Uzoj Srbiji"
            break;
        case 08:
            reg = "Vojvodini"
            break;
        case 09:
            reg = "Kosovu"
            break; 
        case 10:
            reg = "Banja Luka"
            break;
        case 11:
            reg = "Bihać"
            break;
        case 13:
            reg = "Goražde"
            break;
        case 14:
            reg = "Livno"
            break;
        case 15:
            reg = "Mostar"
            break;
        case 16:
            reg = "Prijedor"
            break;
        case 17:
            reg = "Sarajevo"
            break;
        case 18:
            reg = "Tuzla"
            break;
        case 19:
            reg = "Zenica"
            break;
            case 21:
            reg = "Podgorica"
            break;
        case 26:
            reg = "Nikšić"
            break;
        case 29:
            reg = "Pljevlja"
            break;
            case 30:
            reg = "Osijek, Slavonija region"
            break;
        case 31:
            reg = "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region"
            break;
        case 32:
            reg = "Varaždin, Međumurje region"
            break;
        case 33:
            reg = "Zagreb"
            break;
        case 34:
            reg = "Karlovac"
            break;
        case 35:
            reg = "Gospić, Lika region"
            break;
        case 36:
            reg = "Rijeka, Pula, Istra i Primorje region"
            break;
        case 37:
            reg = "Sisak, Banovina region"
            break;
        case 38:
            reg = "Split, Zadar, Dubrovnik, Dalmacija region"
            break;
        case 39:
            reg = "miješano"
            break;
        case 41:
            reg = "Bitola"
            break;
        case 42:
            reg = "Kumanovo"
            break;
        case 43:
            reg = "Ohrid"
            break;
        case 44:
            reg = "Prilep"
            break;
        case 45:
            reg = "Skoplje"
            break;
        case 46:
            reg = "Strumica"
            break;
        case 47:
            reg = "Tetovo"
            break;
        case 48:
            reg = "Veles"
            break;
        case 49:
            reg = "Štip"
            break;
        case 50:
            reg = "Slovenija"
            break;
        case 71:
            reg = "Beograd region (Grad Beograd: Stari Grad, Savski Venac, Voždovac, Vračar, Palilula, Zvezdara, Rakovica, Čukarica, Novi Beograd, Zemun, Mladenovac, Barajevo, Grocka, Obrenovac, Sopot, Lazarevac)"
            break;
        case 72:
            reg = "Šumadija i Pomoravlje regions (Šumadijski okrug: Aranđelovac, Batočina, Knić, Kragujevac, Rača, Lapovo, Topola), (Pomoravski okrug: Despotovac, Paraćin, Rekovac, Jagodina, Svilajnac, Ćuprija)"
            break;
        case 73:
            reg = "Niš region (Nišavski okrug: Aleksinac, Svrljig, Niš, Gadžin Han, Doljevac, Merošina, Ražanj), (Pirotski okrug: Babušnica, Bela Palanka, Dimitrovgrad, Pirot), (Toplički okrug: Blace, Žitorađa, Prokuplje, Kuršumlija)"
            break;
        case 74:
            reg = "Južna Morava region (Jablanički okrug: Leskovac, Vlasotince, Medveđa, Lebane, Bojnik, Crna Trava), (Pčinjski okrug: Vranje, Bujanovac, Surdulica, Bosilegrad, Preševo, Trgovište, Vladičin Han)"
            break;
        case 75:
            reg = "Zaječar region (Zaječarski okrug: Zaječar, Boljevac, Knjaževac, Sokobanja), (Borski okrug: Bor, Majdanpek, Kladovo, Negotin)"
            break;
        case 76:
            reg = "Podunavlje region (Podunavski okrug: Smederevska Palanka, Velika Plana, Smederevo), (Braničevski okrug: Veliko Gradište, Kučevo, Petrovac na Mlavi, Požarevac, Žagubica, Golubac, Žabari, Malo Crniće)"
            break;
        case 77:
            reg = "Podrinje i Kolubara regions (Mačvanski okrug: Loznica, Krupanj, Ljubovija, Šabac, Bogatić, Koceljeva, Vladimirci, Mali Zvornik), (Kolubarski okrug: Valjevo, Lajkovac, Ljig, Ub, Osečina, Mionoca)"
            break;
        case 78:
            reg = "Kraljevo region (Raški okrug: Kraljevo, Vrnjačka Banja, Novi Pazar, Raška, Tutin), (Moravički okrug: Gornji Milanovac, Čačak, Ivanjica, Lučani), (Rasinski okrug: Aleksandrovac, Brus, Kruševac, Trstenik, Varvarin, Ćićevac)"
            break;
        case 79:
            reg = "Užice region (Zlatiborski okrug: Arilje, Bajina Bašta, Kosjerić, Nova Varoš, Požega, Priboj, Prijepolje, Sjenica, Užice, Čajetina)"
            break;
            case 80:
            reg = "Novi Sad region (Južnobački okrug: Bač, Bačka Palanka, Bački Petrovac, Vrbas, Žabalj, Novi Sad, Srbobran, Sremski Karlovci, Temerin, Titel, Bečej, Beočin)"
            break;
        case 81:
            reg = "Sombor region (Zapadnobački okrug: Apatin, Kula, Odžaci, Sombor)"
            break;
        case 82:
            reg = "Subotica region (Severnobački okrug: Bačka Topola, Subotica, Mali Iđoš)"
            break;
        case 85:
            reg = "Zrenjanin region (Srednjebanatski okrug: Zrenjanin, Nova Crnja, Novi Bečej, Sečanj, Žitište)"
            break;
        case 86:
            reg = "Pančevo region (Južnobanatski okrug: Alibunar, Bela Crkva, Vršac, Kovačica, Kovin, Pančevo, Opovo, Plandište)"
            break;
        case 87:
            reg = "Kikinda region (Severnobanatski okrug: Ada, Kikinda, Kanjiža, Novi Kneževac, Senta, Čoka)"
            break;
        case 88:
            reg = "Ruma region (Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)"
            break;
        case 89:
            reg = "Sremska Mitrovica region (Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)"
            break;
        case 91:
            reg = "Priština region (Kosovski okrug: Priština, Obilić, Podujevo, Štrpce, Lipljan, Glogovac, Kačanik, Kosovo Polje, Uroševac, Štimlje)"
            break;
        case 92:
            reg = "Kosovska Mitrovica region (Kosovsko Mitrovački okrug: Kosovska Mitrovica, Zvečan, Leposavić, Zubin Potok, Vučitrn, Srbica)"
            break;
        case 93:
            reg = "Peć region (Pećki okrug: Peć, Istok, Klina)"
            break;
        case 94:
            reg = "Đakovica region (Pećki okrug: Dečani, Đakovica)"
            break;
        case 95:
            reg = "Prizren region (Prizrenski okrug: Gora-Dragaš, Orahovac, Prizren, Suva Reka)"
            break;
        case 96:
            reg = "Kosovsko Pomoravski okrug: (Gnjilane, Kosovska Kamenica, Vitina, Novo Brdo)"
            break;
        default:
            reg = "Nema podataka o mestu" ;
    }
    
    
    
    msg.innerHTML = "<ul class='list-group'><li class='list-group-item'>Uneti JMBG: <strong>" + jmbg + "</strong></li><li class='list-group-item'>Datum rođenja: " + d + "." + m + ".1" + g + "." + "</li><li class='list-group-item'> Pol: " 
    + pol + "</li><li class='list-group-item'>"+ "Region: " + reg ;
    
 
} else {
    msg.innerHTML = "<div class='alert alert-info'> Neispravan unos! JMBG mora imati 13 cifara.</div>"
}
}