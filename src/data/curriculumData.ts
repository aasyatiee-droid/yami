import { NoteCard, QuizQuestion, WardrobeItem, RoomTask } from '../types';

export const LEARNING_OBJECTIVES = [
  'Menyatakan maksud dan hukum menutup aurat dengan tepat.',
  'Menjelaskan ciri-ciri pakaian yang menepati syarak bagi lelaki dan perempuan.',
  'Membaca dan menghafaz doa berpakaian serta mengamalkan adab berpakaian.',
  'Memilih dan menilai pakaian yang sesuai dalam pelbagai situasi harian.',
];

export const INITIAL_NOTES: NoteCard[] = [
  {
    id: 1,
    title: 'Nota 1: Apa itu Aurat & Hukumnya?',
    subtitle: 'Konsep Asas Menutup Aurat Mengikut Syarak',
    badge: 'Maksud & Hukum',
    content:
      'Aurat dari segi bahasa bererti keaiban atau sesuatu yang mendatangkan rasa malu. Dari segi istilah syarak, aurat ialah anggota badan yang wajib ditutup dan haram dilihat oleh orang yang bukan mahram.',
    bulletPoints: [
      'Hukum menutup aurat adalah WAJIB ke atas setiap Muslim dan Muslimah yang telah baligh (mukallaf).',
      'Mendapat pahala jika menutup aurat kerana mentaati perintah Allah SWT.',
      'Berdosa jika mendedahkan aurat kepada bukan mahram.',
      'Menutup aurat memelihara maruah, kehormatan dan kesucian diri kita.',
    ],
    keyTakeaway: 'Menutup aurat adalah tanda syukur dan ketaatan hamba kepada Pencipta.',
    colorTheme: 'lavender',
    audioNarrationText:
      'Aurat ialah anggota badan yang wajib ditutup dan haram dilihat oleh orang bukan mahram. Hukum menutup aurat adalah wajib bagi setiap Muslim dan Muslimah.',
  },
  {
    id: 2,
    title: 'Nota 2: Batasan Aurat Lelaki & Perempuan',
    subtitle: 'Ketahui Perbezaan Had Batasan Aurat',
    badge: 'Batasan Aurat',
    content:
      'Islam menetapkan batasan aurat yang berbeza dan adil bagi lelaki dan perempuan demi menjaga kehormatan masing-masing.',
    bulletPoints: [
      'Lelaki: Dari bahagian pusat hingga ke lutut. Namun sunat dan beradab memakai pakaian sopan menutup dada hingga paras betis atau buku lali.',
      'Perempuan: Seluruh anggota badan KECUALI muka dan kedua-dua tapak tangan (dari pergelangan tangan ke hujung jari).',
      'Rambut, leher, dada, lengan dan kaki perempuan adalah sebahagian daripada aurat di hadapan bukan mahram.',
      'Memakai stoking kaki digalakkan bagi menyempurnakan penutupan aurat perempuan ketika keluar rumah.',
    ],
    keyTakeaway: 'Lelaki: pusat hingga lutut. Perempuan: seluruh tubuh kecuali muka dan tapak tangan.',
    colorTheme: 'pink',
    audioNarrationText:
      'Batasan aurat lelaki adalah antara pusat hingga lutut. Batasan aurat perempuan ialah seluruh anggota badan kecuali muka dan kedua-dua tapak tangan.',
  },
  {
    id: 3,
    title: 'Nota 3: Dalil Naqli Menutup Aurat',
    subtitle: 'Kewajipan Berdasarkan Al-Quran Al-Karim',
    badge: 'Dalil Naqli',
    content:
      'Kewajipan menutup aurat difardukan dengan jelas dalam firman Allah SWT di dalam Surah Al-Ahzab ayat 59.',
    arabicText: 'يَٰٓأَيُّهَا ٱلنَّبِىُّ قُل لِّأَزْوَٰجِكَ وَبَنَاتِكَ وَنِسَآءِ ٱلْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَٰبِيبِهِنَّ',
    transliteration: 'Yā ayyuhan-nabiyyu qul li-azwājika wa banātika wa nisā-il-mu’minīna yudnīna ‘alayhinna min jalābībihinna...',
    translation:
      'Maksudnya: "Wahai Nabi! Katakanlah kepada isteri-isterimu, anak-anak perempuanmu dan wanita-wanita orang beriman, supaya melabuhkan pakaiannya ke seluruh tubuh mereka..." (Surah Al-Ahzab: 59)',
    bulletPoints: [
      'Dalil ini menegaskan arahan melabuhkan pakaian (jilbab/tudung) ke seluruh tubuh.',
      'Tujuannya agar wanita Islam dikenali sebagai wanita yang terhormat dan tidak diganggu.',
      'Kewajipan ini adalah suruhan langsung daripada Allah SWT.',
    ],
    keyTakeaway: 'Al-Quran mewajibkan melabuhkan pakaian dan tudung menutupi dada serta tubuh.',
    colorTheme: 'blue',
    audioNarrationText:
      'Wahai Nabi! Katakanlah kepada isteri-isterimu, anak-anak perempuanmu dan wanita-wanita orang beriman, supaya melabuhkan pakaian mereka ke seluruh tubuh mereka. Surah Al-Ahzab ayat 59.',
  },
  {
    id: 4,
    title: 'Nota 4: Ciri-ciri Pakaian Menepati Syarak',
    subtitle: '6 Panduan Penting Sebelum Memilih Pakaian',
    badge: 'Ciri Pakaian',
    content:
      'Bukan sekadar sarung baju, pakaian seorang Muslim dan Muslimah mestilah memenuhi piawaian syarak berikut:',
    bulletPoints: [
      '1. Menutup seluruh batasan aurat dengan sempurna.',
      '2. Longgar dan tidak ketat sehingga menampakkan bentuk susuk tubuh.',
      '3. Tebal dan tidak jarang/lut sinar yang menampakkan kulit atau warna kulit.',
      '4. Tidak menyerupai pakaian lawan jantina (lelaki tidak berpakaian seperti perempuan, perempuan tidak berpakaian seperti lelaki).',
      '5. Tidak menyerupai pakaian khas atau lambang upacara agama lain.',
      '6. Tidak berniat untuk bermegah-megah atau menunjuk-nunjuk (pakaian syuhrah).',
    ],
    keyTakeaway: 'Pakaian syarak: Labuh, longgar, tebal, sopan dan bersih!',
    colorTheme: 'mint',
    audioNarrationText:
      'Enam ciri pakaian menepati syarak: menutup aurat dengan sempurna, longgar dan tidak ketat, kain tebal tidak jarang, tidak menyerupai lawan jantina, tidak menyerupai agama lain, dan tidak bermegah-megah.',
  },
  {
    id: 5,
    title: 'Nota 5: Doa & Adab Berpakaian',
    subtitle: 'Amalan Sunnah Rasulullah SAW Setiap Hari',
    badge: 'Doa & Adab',
    content:
      'Rasulullah SAW mengajarkan kita agar sentiasa beradab dan membaca doa apabila mengenakan pakaian baharu atau harian:',
    arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: 'Alhamdulillahilladzi kasani hazats-tsauba wa razaqanihi min ghairi haulin minni wa la quwwatin.',
    translation:
      'Maksudnya: "Segala puji bagi Allah yang telah memakaikan aku pakaian ini dan mengurniakannya kepadaku tanpa sebarang daya dan kekuatanku."',
    bulletPoints: [
      'Membaca Bismillah dan berniat memakai pakaian kerana ketaatan kepada Allah.',
      'Mendahulukan anggota sebelah KANAN ketika memakai pakaian.',
      'Mendahulukan anggota sebelah KIRI ketika menanggalkan pakaian.',
      'Memakai pakaian yang bersih dan kemas.',
    ],
    keyTakeaway: 'Dahulukan kanan ketika memakai, dahulukan kiri ketika menanggalkan.',
    colorTheme: 'cream',
    audioNarrationText:
      'Alhamdulillahilladzi kasani hazats-tsauba wa razaqanihi min ghairi haulin minni wa la quwwatin. Segala puji bagi Allah yang memakaikan aku pakaian ini tanpa daya dan kekuatanku.',
  },
  {
    id: 6,
    title: 'Nota 6: Adab Berpakaian dalam Situasi Harian',
    subtitle: 'Praktikal di Rumah, Sukan, Sekolah & Majlis',
    badge: 'Situasi Harian',
    content:
      'Kita menghadapi pelbagai aktiviti harian. Berikut cara menyesuaikan pakaian tetap patuh syarak:',
    bulletPoints: [
      'Ketika bersukan / beriadah: Pilih baju sukan berlengan panjang, seluar sukan longgar (track bottom) dan tudung sukan yang kemas.',
      'Di dalam rumah (bersama keluarga mahram seperti ibu bapa dan adik-beradik): Boleh berpakaian santai tetapi tetap menjaga kesopanan.',
      'Di luar rumah / pasar raya / taman: Wajib menutup aurat dengan rapi di hadapan orang bukan mahram.',
      'Ke masjid atau majlis ilmu: Memakai pakaian bersih, elok, wangi (bagi lelaki) dan tidak mengganggu tumpuan jemaah.',
    ],
    keyTakeaway: 'Di mana jua kita berada, jagalah aurat dan maruah diri dengan bangga.',
    colorTheme: 'lavender',
    audioNarrationText:
      'Sesuaikan pakaian mengikut aktiviti seperti sukan atau ke masjid dengan memastikan syarat menutup aurat tetap dipatuhi sepenuhnya.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Apakah maksud "aurat" dari segi istilah syarak?',
    options: [
      'Pakaian tradisional yang dipakai semasa hari raya sahaja.',
      'Anggota badan yang wajib ditutup daripada pandangan orang bukan mahram.',
      'Perhiasan diri yang cantik dan berkilauan.',
      'Warna baju yang digemari oleh kanak-kanak.',
    ],
    correctAnswer: 1,
    explanation:
      'Tepat! Dari segi syarak, aurat ialah anggota badan yang wajib ditutup dan haram dilihat oleh orang yang bukan mahram.',
    category: 'maksud',
    type: 'multiple_choice',
  },
  {
    id: 2,
    question: 'Apakah hukum menutup aurat bagi setiap Muslim dan Muslimah yang telah baligh?',
    options: ['Harus', 'Sunat', 'Wajib', 'Makruh'],
    correctAnswer: 2,
    explanation:
      'Betul sekali! Menutup aurat adalah WAJIB (fardu ain) ke atas setiap mukallaf. Berdosa jika meninggalkannya.',
    category: 'hukum',
    type: 'multiple_choice',
  },
  {
    id: 3,
    question: 'Apakah batasan aurat bagi seorang perempuan di hadapan lelaki bukan mahram?',
    options: [
      'Antara pusat hingga ke lutut sahaja.',
      'Dada dan bahagian pinggang sahaja.',
      'Seluruh anggota badan KECUALI muka dan kedua-dua tapak tangan.',
      'Rambut dan kaki sahaja yang wajib ditutup.',
    ],
    correctAnswer: 2,
    explanation:
      'Tahniah! Batasan aurat perempuan yang baligh ialah seluruh tubuh kecuali muka dan dua tapak tangan.',
    category: 'maksud',
    type: 'multiple_choice',
  },
  {
    id: 4,
    question: 'Berapakah batasan aurat bagi seorang lelaki Muslim?',
    options: [
      'Dari leher hingga ke paras dada.',
      'Antara pusat hingga ke lutut.',
      'Seluruh tubuh kecuali kepala.',
      'Hanya bahagian bahu dan lengan.',
    ],
    correctAnswer: 1,
    explanation:
      'Tepat! Aurat lelaki dari segi batasan fiqh adalah antara pusat hingga lutut, dan sunat berpakaian sopan menutup seluruh badan.',
    category: 'maksud',
    type: 'multiple_choice',
  },
  {
    id: 5,
    question: 'Bolehkah seorang Muslimah memakai pakaian yang nipis dan menampakkan warna kulitnya?',
    options: [
      'Boleh, asalkan pakaian itu berjenama mahal.',
      'Boleh sekiranya cuaca di luar sangat panas.',
      'Tidak boleh, kerana syarat pakaian syarak mestilah tebal dan tidak jarang.',
      'Boleh jika memakai cermin mata hitam.',
    ],
    correctAnswer: 2,
    explanation:
      'Tepat! Salah satu ciri utama pakaian menepati syarak ialah kain mestilah tebal dan tidak jarang (lut sinar).',
    category: 'ciri_pakaian',
    type: 'multiple_choice',
  },
  {
    id: 6,
    question: 'Antara berikut, manakah adab sunnah ketika memulakan pemakaian pakaian?',
    options: [
      'Mendahulukan anggota sebelah kiri.',
      'Mendahulukan anggota sebelah kanan dan membaca bismillah serta doa.',
      'Memakai pakaian sambil melompat-lompat riang.',
      'Memakai baju terbalik untuk menjimatkan basuhan.',
    ],
    correctAnswer: 1,
    explanation:
      'Benar! Sunnah Rasulullah SAW adalah memulakan dengan Bismillah dan mendahulukan anggota kanan.',
    category: 'adab_doa',
    type: 'multiple_choice',
  },
  {
    id: 7,
    question: 'Aisyah ingin menyertai aktiviti merentas desa sekolah. Bagaimanakah pakaian sukan yang menepati syarak?',
    options: [
      'Berseluar pendek dan berbaju tanpa lengan agar mudah berlari laju.',
      'Memakai baju sukan lengan panjang longgar, seluar sukan labuh dan tudung sukan yang kemas.',
      'Memakai baju gaun pesta yang sarat manik labuh.',
      'Tidak perlu memakai tudung kerana acara sukan dikecualikan daripada menutup aurat.',
    ],
    correctAnswer: 1,
    explanation:
      'Hebat! Muslimah boleh beriadah dengan selesa memakai pakaian sukan berlengan panjang, seluar sukan longgar dan tudung sukan.',
    category: 'situasi',
    type: 'scenario',
  },
  {
    id: 8,
    question: 'Hukum lelaki memakai pakaian yang menyerupai pakaian wanita atau perhiasan khas wanita (seperti rantai emas) adalah HARAM.',
    options: ['Benar', 'Palsu'],
    correctAnswer: 0,
    explanation:
      'Benar! Rasulullah SAW melaknat lelaki yang menyerupai wanita dan wanita yang menyerupai lelaki dalam berpakaian.',
    category: 'ciri_pakaian',
    type: 'true_false',
  },
  {
    id: 9,
    question: 'Apakah tujuan utama Allah SWT memerintahkan kita menutup aurat?',
    options: [
      'Untuk menunjuk-nunjuk kekayaan pakaian baharu kepada rakan-rakan.',
      'Memelihara maruah, kehormatan diri dan bukti ketaatan kepada perintah Allah.',
      'Menyusahkan manusia semasa beraktiviti di luar.',
      'Supaya orang lain memuji kecantikan kita.',
    ],
    correctAnswer: 1,
    explanation:
      'Tepat sekali! Menutup aurat memelihara maruah, melindungi kesucian diri dan membuktikan kepatuhan kita kepada Allah.',
    category: 'hukum',
    type: 'multiple_choice',
  },
  {
    id: 10,
    question: 'Ketika hendak menanggalkan pakaian atau kasut, anggota manakah yang disunnahkan untuk ditanggalkan terlebih dahulu?',
    options: [
      'Anggota sebelah kanan.',
      'Anggota sebelah kiri.',
      'Kedua-dua belah serentak.',
      'Tidak ada sunnah dalam menanggalkan pakaian.',
    ],
    correctAnswer: 1,
    explanation:
      'Tepat! Sunnah Rasulullah SAW: mendahulukan KANAN ketika memakai pakaian, dan mendahulukan KIRI ketika menanggalkan pakaian.',
    category: 'adab_doa',
    type: 'multiple_choice',
  },
];

export const DEFAULT_WARDROBE_ITEMS: WardrobeItem[] = [
  // Tudung / Headwear
  {
    id: 'tudung_bawal_pink',
    name: 'Tudung Bawal Labuh (Pink)',
    category: 'tudung',
    forGender: 'perempuan',
    icon: '🌸',
    color: '#F6D6E6',
    syarakCompliant: true,
    reason: 'Labuh menutupi dada, tidak jarang dan kemas.',
    imageOrSvgType: 'tudung_pink',
  },
  {
    id: 'tudung_sarung_lavender',
    name: 'Tudung Sarung (Lavender)',
    category: 'tudung',
    forGender: 'perempuan',
    icon: '💜',
    color: '#DCCCF4',
    syarakCompliant: true,
    reason: 'Menutup leher dan dada dengan sempurna serta selesa.',
    imageOrSvgType: 'tudung_lavender',
  },
  {
    id: 'tudung_singkat',
    name: 'Tudung Singkat Nampak Leher',
    category: 'tudung',
    forGender: 'perempuan',
    icon: '⚠️',
    color: '#FDE047',
    syarakCompliant: false,
    reason: 'Terlalu singkat, tidak menutup dada dan leher terdedah.',
    imageOrSvgType: 'tudung_short',
  },
  {
    id: 'songkok_hitam',
    name: 'Songkok Hitam Kemas',
    category: 'tudung',
    forGender: 'lelaki',
    icon: '🎩',
    color: '#1E293B',
    syarakCompliant: true,
    reason: 'Menepati sunnah beradab dan kemas bagi lelaki.',
    imageOrSvgType: 'songkok',
  },
  // Baju
  {
    id: 'blouse_pink_labuh',
    name: 'Blaus Labuh Longgar (Pink)',
    category: 'baju',
    forGender: 'perempuan',
    icon: '👚',
    color: '#FBCFE8',
    syarakCompliant: true,
    reason: 'Lengan panjang hingga pergelangan tangan, longgar dan sopan.',
    imageOrSvgType: 'blouse_pink',
  },
  {
    id: 'baju_melayu_blue',
    name: 'Baju Melayu Cekak Musang (Biru)',
    category: 'baju',
    forGender: 'lelaki',
    icon: '👕',
    color: '#93C5FD',
    syarakCompliant: true,
    reason: 'Kemas, berlengan panjang, berbutang kemas dan bersopan.',
    imageOrSvgType: 'baju_melayu_blue',
  },
  {
    id: 'tshirt_pendek_ketat',
    name: 'Baju T Lengan Pendek Ketat',
    category: 'baju',
    forGender: 'both',
    icon: '⚠️',
    color: '#FECACA',
    syarakCompliant: false,
    reason: 'Ketat menampakkan bentuk badan dan lengan terdedah bagi perempuan.',
    imageOrSvgType: 'tshirt_tight',
  },
  // Jubah
  {
    id: 'jubah_muslimah_cream',
    name: 'Jubah Muslimah Labuh (Krim)',
    category: 'jubah',
    forGender: 'perempuan',
    icon: '👗',
    color: '#FEF3C7',
    syarakCompliant: true,
    reason: 'Labuh hingga buku lali, kain tebal dan tidak ketat.',
    imageOrSvgType: 'jubah_cream',
  },
  {
    id: 'jubah_lelaki_putih',
    name: 'Jubah Lelaki Putih Bersih',
    category: 'jubah',
    forGender: 'lelaki',
    icon: '👘',
    color: '#F8FAFC',
    syarakCompliant: true,
    reason: 'Kemas, sunnah dan menutup aurat dengan sempurna.',
    imageOrSvgType: 'jubah_lelaki',
  },
  // Kain / Seluar
  {
    id: 'kain_labuh_floral',
    name: 'Kain Susun Labuh',
    category: 'kain',
    forGender: 'perempuan',
    icon: '🌸',
    color: '#DDD6FE',
    syarakCompliant: true,
    reason: 'Kain labuh hingga buku lali, tidak ketat dan sopan.',
    imageOrSvgType: 'kain_labuh',
  },
  {
    id: 'seluar_panjang_slack',
    name: 'Seluar Slack Panjang Longgar',
    category: 'seluar',
    forGender: 'both',
    icon: '👖',
    color: '#334155',
    syarakCompliant: true,
    reason: 'Menutup hingga buku lali dan potongan selesa tidak ketat.',
    imageOrSvgType: 'seluar_panjang',
  },
  {
    id: 'seluar_pendek_lutut',
    name: 'Seluar Pendek Atas Lutut',
    category: 'seluar',
    forGender: 'both',
    icon: '⚠️',
    color: '#F87171',
    syarakCompliant: false,
    reason: 'Mendedahkan lutut dan paha yang merupakan aurat.',
    imageOrSvgType: 'seluar_pendek',
  },
  // Aksesori
  {
    id: 'stoking_kaki_tebal',
    name: 'Stoking Kaki Tebal',
    category: 'aksesori',
    forGender: 'both',
    icon: '🧦',
    color: '#E2E8F0',
    syarakCompliant: true,
    reason: 'Menutup kaki perempuan dengan sempurna.',
    imageOrSvgType: 'stoking',
  },
  {
    id: 'handsock_lengan',
    name: 'Handsock (Sarung Lengan)',
    category: 'aksesori',
    forGender: 'perempuan',
    icon: '🧤',
    color: '#F472B6',
    syarakCompliant: true,
    reason: 'Memastikan pergelangan tangan tidak terdedah semasa bergerak.',
    imageOrSvgType: 'handsock',
  },
];

export const ROOM_TASKS: RoomTask[] = [
  {
    id: 'task_living_room',
    roomId: 'ruang_tamu',
    title: 'Sapu Ruang Tamu & Sambut Tetamu',
    description: 'Bantu kemaskan ruang tamu. Pastikan sebelum membuka pintu menyambut tetamu bukan mahram, kita sudah memakai pakaian menutup aurat dengan sopan!',
    adabTip: 'Adab menyambut tetamu: Menutup aurat, berwajah manis, memberi salam dan menjaga batas pergaulan.',
    coinsReward: 10,
    isCompleted: false,
  },
  {
    id: 'task_bedroom',
    roomId: 'bilik_tidur',
    title: 'Kemas Katil & Susun Almari',
    description: 'Lipat selimut, susun bantal, dan pilih pakaian sopan yang bersih untuk aktiviti hari ini.',
    adabTip: 'Adab di bilik tidur: Membaca doa bangun tidur, merapikan katil, dan tidak membiarkan pakaian berselerak.',
    coinsReward: 10,
    isCompleted: false,
  },
  {
    id: 'task_kitchen',
    roomId: 'dapur',
    title: 'Bantu Ibu di Dapur',
    description: 'Susun pinggan mangkuk di meja makan bersama keluarga.',
    adabTip: 'Adab makan: Membaca bismillah, menggunakan tangan kanan, dan tidak mencela makanan.',
    coinsReward: 10,
    isCompleted: false,
  },
  {
    id: 'task_bathroom',
    roomId: 'bilik_air',
    title: 'Adab Kebersihan & Mandi',
    description: 'Bilik air tempat membersihkan diri. Ingat membaca doa masuk bilik air dan mendahulukan kaki kiri.',
    adabTip: 'Doa masuk bilik air: "Allahumma inni a’udzubika minal khubutsi wal khaba-its". Tutup aurat walaupun ketika di bilik air.',
    coinsReward: 10,
    isCompleted: false,
  },
  {
    id: 'task_library',
    roomId: 'bilik_ilmu',
    title: 'Teroka Bilik Ilmu & Nota Adab',
    description: 'Buka buku nota di perpustakaan mini untuk memahami dalil naqli dan ciri pakaian syarak.',
    adabTip: 'Adab menuntut ilmu: Berniat ikhlas kerana Allah, memberi tumpuan, dan mengamalkan ilmu yang dipelajari.',
    coinsReward: 15,
    isCompleted: false,
  },
];

export const DEFAULT_VIDEO_CONFIG = {
  title: 'Video Pembelajaran: Jom Menutup Aurat!',
  description:
    'Saksikan penerangan animasi menarik tentang konsep asas menutup aurat, batasan aurat dan ciri pakaian sopan untuk murid Tahun 4.',
  embedUrl: 'https://www.youtube.com/embed/S9VzT2kZ57o', // High quality Educational video placeholder (easily editable by teacher)
  teacherCustomUrl: '',
  comprehensionQuestions: [
    {
      id: 1,
      question: 'Apakah hukum menutup aurat bagi umat Islam yang baligh menurut video?',
      options: ['Harus', 'Wajib', 'Makruh'],
      correctAnswer: 1,
      explanation: 'Menutup aurat adalah perintah wajib daripada Allah SWT.',
    },
    {
      id: 2,
      question: 'Apakah ciri utama kain bagi pakaian yang menepati syarak?',
      options: ['Nipis dan jarang', 'Tebal dan tidak tembus cahaya', 'Ketat mengikut bentuk badan'],
      correctAnswer: 1,
      explanation: 'Kain mestilah tebal supaya tidak menampakkan warna kulit di sebaliknya.',
    },
    {
      id: 3,
      question: 'Apakah anggota perempuan yang dibenarkan terbuka di hadapan bukan mahram?',
      options: ['Muka dan dua tapak tangan', 'Rambut dan leher', 'Kaki hingga lutut'],
      correctAnswer: 0,
      explanation: 'Hanya bahagian muka dan dua tapak tangan sahaja yang dikecualikan.',
    },
  ],
};

export const DEFAULT_ROSEBUD_CONFIG = {
  title: 'Pengembaraan Rumah Ceria 2D',
  description: 'Terokai rumah 2D comel, selesaikan misi adab harian dan uji kepatuhan pakaian menepati syarak.',
  gameUrl: 'https://rumah-ceria-lab.base44.app/rumah', // Direct link to Rumah Ceria Lab
  embedded: true,
};
