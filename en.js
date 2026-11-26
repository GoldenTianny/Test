// NIV(영어)로 볼 때 쓰는 영어 이름들: 성경 책 이름, 소제목, 중제목, 작은 묶음 제목
// 소제목 키는 띄어쓰기를 뺀 한글 이름(번호 제외)으로 찾습니다.
const BOOK_EN = {
  "창": "Genesis", "출": "Exodus", "레": "Leviticus", "민": "Numbers", "신": "Deuteronomy", "수": "Joshua",
  "삼상": "1 Samuel", "삼하": "2 Samuel", "왕상": "1 Kings", "대상": "1 Chronicles", "대하": "2 Chronicles",
  "스": "Ezra", "느": "Nehemiah", "욥": "Job", "시": "Psalm", "잠": "Proverbs", "전": "Ecclesiastes",
  "사": "Isaiah", "렘": "Jeremiah", "렘애": "Lamentations", "애": "Lamentations", "겔": "Ezekiel", "단": "Daniel",
  "욘": "Jonah", "미": "Micah", "합": "Habakkuk", "말": "Malachi",
  "마": "Matthew", "막": "Mark", "눅": "Luke", "요": "John", "행": "Acts", "롬": "Romans",
  "고전": "1 Corinthians", "고후": "2 Corinthians", "갈": "Galatians", "엡": "Ephesians", "빌": "Philippians",
  "골": "Colossians", "살전": "1 Thessalonians", "살후": "2 Thessalonians", "딤전": "1 Timothy", "딤후": "2 Timothy",
  "딛": "Titus", "히": "Hebrews", "약": "James", "벧전": "1 Peter", "벧후": "2 Peter",
  "요일": "1 John", "계": "Revelation"
};

const TOPIC_EN = {
  // 5확신
  "구원의확신": "Assurance of Salvation", "기도응답의확신": "Assurance of Answered Prayer", "승리의확신": "Assurance of Victory",
  "사죄의확신": "Assurance of Forgiveness", "인도의확신": "Assurance of Guidance",
  // 8구절
  "그리스도안의생활": "Life in Christ", "하나님의말씀에의한생활": "Life by God's Word", "하나님의성령에의한생활": "Life by God's Spirit",
  "믿음에의한생활": "Life by Faith", "사랑에의한생활": "Life by Love", "그리스도인의교제하는생활": "Life of Christian Fellowship",
  "증인으로서의생활": "Life as a Witness", "후히드리는생활": "Life of Generous Giving",
  // 60구절 (Topical Memory System)
  "중심되신그리스도": "Christ the Center", "그리스도께순종": "Obedience to Christ", "말씀": "God's Word", "기도": "Prayer",
  "교제": "Fellowship", "증거": "Witnessing",
  "모든사람이죄를범함": "All Have Sinned", "죄의형벌": "Sin's Penalty", "그리스도가형벌을받음": "Christ Paid the Penalty",
  "선행으로구원받지못함": "Salvation Not by Works", "그리스도를모셔야함": "Must Receive Christ",
  "성령": "His Spirit", "능력": "His Strength", "성실": "His Faithfulness", "평안": "His Peace", "공급": "His Provision",
  "유혹에서도우심": "His Help in Temptation",
  "그리스도를첫자리에모심": "Put Christ First", "죄에서떠남": "Separate from the World", "견고함": "Be Steadfast",
  "다른사람을섬김": "Serve Others", "후히드릴것": "Give Generously", "세계비전": "Develop World Vision",
  "사랑": "Love", "겸손": "Humility", "순결": "Purity", "정직": "Honesty", "믿음": "Faith", "선행": "Good Works",
  // 242 I. 구원의 확신
  "확신할수있음": "We Can Be Sure", "영생이있음을앎": "Knowing We Have Eternal Life", "죄사함을받음": "Our Sins Are Forgiven",
  "의롭게됨": "Made Righteous", "그리스도안에서거듭남": "Born Again in Christ", "하나님의자녀가됨": "Becoming God's Children",
  "믿는자안에거하시는성령": "The Spirit Dwells in Believers", "빼앗기지않는구원": "Salvation That Cannot Be Taken Away",
  "말씀에근거한확신": "Assurance Based on the Word",
  // 242 II. Quiet Time
  "하나님이교제를원하심": "God Desires Fellowship", "하나님의명령": "God's Command", "축복의약속": "Promise of Blessing",
  "하나님의뜻을알고행하기위해": "To Know and Do God's Will", "주님을바라보는것": "Looking to the Lord",
  "갈급함으로주님께나아가는것": "Coming to the Lord with Thirst", "우리짐을주님께맡기는것": "Casting Our Burdens on the Lord",
  "주님께피하고쉬는것": "Taking Refuge and Rest in the Lord", "말씀과기도로주님과교제하는것": "Fellowship with the Lord in Word and Prayer",
  "주님을예배하는것": "Worshiping the Lord", "매일의만족을얻는것": "Finding Daily Satisfaction",
  "하루의첫시간에기도하신예수님": "Jesus Prayed in the First Hour of the Day", "친밀한교제를가진모세": "Moses' Intimate Fellowship",
  "생명보다귀히여긴다니엘": "Daniel Valued It More Than Life", "주님과함께함으로깨달음을얻은제자들": "The Disciples Gained Understanding by Being with the Lord",
  // 242 III. 말씀
  "하나님의감동으로된말씀": "God-Breathed Word", "영원불변한말씀": "Eternal, Unchanging Word", "진리의말씀": "Word of Truth",
  "능력의말씀": "Word of Power", "예수님도말씀에권위를두심": "Jesus Relied on the Word's Authority",
  "거듭나게함": "Gives New Birth", "성장하게함": "Makes Us Grow", "인도해주심": "Gives Guidance", "문제를해결해주심": "Solves Problems",
  "기쁨과즐거움이됨": "Brings Joy and Delight", "영적무기가됨": "A Spiritual Weapon",
  "날마다말씀을상고함": "Examining the Word Daily", "종일말씀을묵상함": "Meditating on the Word All Day",
  "말씀을행하고가르침": "Doing and Teaching the Word", "일정한음식보다말씀을더귀히여김": "Treasuring the Word More Than Daily Bread",
  "말씀을믿고순종함": "Believing and Obeying the Word",
  "듣기": "Hear", "읽기": "Read", "공부": "Study", "암송": "Memorize", "묵상": "Meditate",
  // 242 IV. 기도
  "쉬지말고기도할것": "Pray Continually", "기도를힘쓸것": "Devote Yourselves to Prayer", "깨어기도할것": "Be Alert and Pray",
  "모든사람을위하여기도할것": "Pray for Everyone", "응답의약속": "Promise of Answer", "넘치는응답": "Abundant Answer",
  "하나님의뜻을알게됨": "Knowing God's Will", "지혜를주심": "He Gives Wisdom", "두려움에서건져주심": "He Delivers from Fear",
  "환난에서건져주심": "He Delivers from Trouble", "담대함을주심": "He Gives Boldness", "전도의기회를주심": "He Opens Doors for the Gospel",
  "예수님의이름으로기도할것": "Pray in Jesus' Name", "믿음으로기도할것": "Pray in Faith", "성령을의뢰함으로기도할것": "Pray Relying on the Spirit",
  "하나님의뜻대로기도할것": "Pray According to God's Will", "죄를자백하고버릴것": "Confess and Renounce Sin", "순종할것": "Obey",
  "합심하여기도할것": "Pray in Agreement", "적극적으로기도할것": "Pray Persistently", "전심으로부르짖을것": "Seek with All Your Heart",
  "약속을주장하며기도할것": "Pray Claiming God's Promises",
  "모범적인기도": "Exemplary Prayer", "우선순위를둔기도": "Prayer as a Priority", "밤을새워한기도": "Praying All Night",
  "간절한기도": "Earnest Prayer", "곤경중의기도": "Prayer in Hardship",
  "찬양": "Praise", "중보": "Intercession", "감사": "Thanksgiving", "자백": "Confession", "간구": "Petition",
  // 242 V. 교제
  "그리스도의보혈": "The Blood of Christ", "하나님-성부,성자,성령": "God — Father, Son and Holy Spirit", "함께하심의약속": "Promise of His Presence",
  "복을명하심": "He Bestows Blessing", "죄로부터보호됨": "Protected from Sin", "서로일으켜줌": "Lifting Each Other Up",
  "경건한삶을훈련함": "Training in Godliness", "인격을계발함": "Developing Character", "지혜를얻음": "Gaining Wisdom", "성장케됨": "Growing Up",
  "사역의열매를맺음": "Bearing Fruit in Ministry", "복음중심의삶에드러짐": "Shown in a Gospel-Centered Life",
  "사랑과선행을격려함": "Spurring One Another to Love and Good Deeds", "필요를채워줌": "Meeting Needs",
  "그리스도의고난에동참함": "Sharing in Christ's Sufferings", "서로의짐을짐": "Carrying Each Other's Burdens",
  "마음을같이할것": "Be Like-Minded", "겸손할것": "Be Humble", "마음을넓힐것": "Open Wide Your Hearts", "피차복종할것": "Submit to One Another",
  "비교하지말것": "Don't Compare", "쓴뿌리를갖지말것": "Let No Bitter Root Grow", "열매없는일에서떠날것": "Have Nothing to Do with Fruitless Deeds",
  "자기일에얽매이지말것": "Don't Get Entangled in Civilian Affairs", "성도와의관계": "Relationship with Believers", "하나님과의관계": "Relationship with God",
  // 242 VI. 증거
  "모든그리스도인": "Every Christian", "잃어버린자에대한사랑": "Love for the Lost", "복음전할부탁을받음": "Entrusted with the Gospel",
  "부득불할일이므로": "Compelled to Preach", "전파해야믿게되므로": "They Believe When Someone Preaches",
  "모든사람이구원받길원하시므로": "God Wants All to Be Saved", "사람을가장아끼시므로": "God Cares Deeply for People",
  "죄인하나의회개를기뻐하시므로": "Heaven Rejoices over One Sinner Who Repents", "주안에서의축복된교제를위해": "For Blessed Fellowship in the Lord",
  "영원한영광이있음": "Eternal Glory", "먼저주님을따를것": "First Follow the Lord", "선한간증의삶을살것": "Live a Life of Good Testimony",
  "기도할것": "Pray", "대답할것을예비할것": "Be Prepared to Give an Answer", "간증을사용할것": "Use Your Testimony",
  "말씀의능력을믿고전할것": "Share Trusting the Word's Power", "말씀의결과를믿고전할것": "Share Trusting the Word's Results",
  "전도의초점을예수님께둘것": "Keep the Focus on Jesus", "능력과확신으로전할것": "Share with Power and Conviction",
  "영접하도록도울것": "Help Them Receive Christ", "미루지않도록도울것": "Help Them Not to Delay", "구원을확증토록할것": "Help Them Confirm Their Salvation",
  "전도성경공부를할것": "Lead an Evangelistic Bible Study", "바울": "Paul", "빌립": "Philip", "베드로와요한": "Peter and John",
  "하나님의형상으로지음받음": "Created in God's Image", "죄로인해하나님과분리됨": "Separated from God by Sin",
  "인간의상태-죄인": "Our Condition — Sinners", "인간의상태-심판": "Our Condition — Judgment", "인간의상태-사망": "Our Condition — Death",
  "인간의힘으로구원받지못함-행위": "Not Saved by Human Effort — Works", "인간의힘으로구원받지못함-종교": "Not Saved by Human Effort — Religion",
  "인간의힘으로구원받지못함-돈": "Not Saved by Human Effort — Money", "인간의힘으로구원받지못함-신비의체험": "Not Saved by Human Effort — Mystical Experience",
  "인간의힘으로구원받지못함-지혜": "Not Saved by Human Effort — Wisdom", "인간의힘으로구원받지못함-학문과전통": "Not Saved by Human Effort — Learning and Tradition",
  "인간의힘으로구원받지못함-혈통": "Not Saved by Human Effort — Descent", "인간의힘으로구원받지못함-육은무익함": "Not Saved by Human Effort — The Flesh Counts for Nothing",
  "하나님의해결-하나님께로인도하는다리": "God's Solution — The Bridge to God", "하나님의해결-독생자를주심": "God's Solution — He Gave His One and Only Son",
  "하나님의해결-죄를위해죽으심": "God's Solution — He Died for Our Sins", "하나님의해결-부활하심": "God's Solution — He Rose Again",
  "하나님의해결-모든죄를사하심": "God's Solution — He Forgave All Our Sins", "인간의책임-듣고믿어야함": "Our Response — Hear and Believe",
  "인간의책임-영접해야함": "Our Response — Receive Him", "인간의책임-영접기도": "Our Response — Prayer to Receive Christ",
  // 180 1. 하나님을 알아감
  "예수님의신성": "The Deity of Jesus", "예수님의인성": "The Humanity of Jesus", "예수님의부활": "The Resurrection of Jesus",
  "예수님은하나님을나타내심": "Jesus Reveals God", "구속자이신예수님": "Jesus the Redeemer", "예수님의재림": "The Return of Jesus",
  "증거하시는성령": "The Spirit Who Testifies", "내주하시는성령": "The Indwelling Spirit", "통치하시는성령": "The Spirit Who Controls",
  "계시하시는성령": "The Spirit Who Reveals", "능력을주시는성령": "The Spirit Who Empowers", "은사를주시는성령": "The Spirit Who Gives Gifts",
  "하나님의능력": "God's Power", "하나님의지혜": "God's Wisdom", "하나님의임재": "God's Presence", "하나님의은혜": "God's Grace",
  "하나님의영광": "God's Glory", "하나님의성실": "God's Faithfulness", "하나님은영이심": "God Is Spirit", "하나님의거룩하심": "God's Holiness",
  "하나님의광대하심": "God's Greatness", "하나님의사랑": "God's Love", "하나님의긍휼": "God's Compassion", "하나님의절대주권": "God's Sovereignty",
  // 180 2. 사랑 안에서 자라감
  "진실을말함": "Speaking the Truth", "험담을피함": "Avoiding Gossip", "은혜스럽게말함": "Speaking with Grace", "죄를시인함": "Admitting Sin",
  "경청함": "Listening", "책망을받아들임": "Accepting Correction", "다른사람을용서함": "Forgiving Others", "오래참음": "Patience",
  "분노를다스림": "Controlling Anger", "악의를버림": "Getting Rid of Malice", "억울한일을참음": "Enduring Unjust Treatment",
  "시기심을버림": "Getting Rid of Envy", "화목한생활": "Living in Harmony", "남을먼저생각함": "Considering Others First",
  "서로격려함": "Encouraging One Another", "불쌍히여김": "Showing Compassion", "온유하게대함": "Treating Others Gently",
  // 180 3. 믿음 안에서 자라감
  "약속의중요성": "The Importance of Promises", "선교를위한약속들": "Promises for Ministry", "열매맺는삶을위한약속들": "Promises for a Fruitful Life",
  "고난중도우심을위한약속들": "Promises of Help in Suffering", "공급을위한약속들": "Promises of Provision", "용서에대한약속들": "Promises of Forgiveness",
  "영감": "Inspiration", "영양": "Nourishment", "알아야함": "Must Know It", "순종해야함": "Must Obey It", "확실성": "Certainty",
  "믿음의시련": "Trials of Faith", "불신의결과": "Results of Unbelief", "믿음의투쟁": "The Fight of Faith", "믿음의근원": "The Source of Faith",
  "행하는믿음": "Faith in Action", "믿음으로의롭게됨": "Justified by Faith",
  // 180 4. 승리 안에서 행함
  "그리스도안에있는승리": "Victory in Christ", "승리의무기": "Weapons of Victory", "마귀를이김": "Overcoming the Devil", "육신을이김": "Overcoming the Flesh",
  "세상을이김": "Overcoming the World", "죄를이김": "Overcoming Sin", "생각": "Thoughts", "마음": "Heart", "눈": "Eyes", "몸": "Body", "말": "Speech",
  "행동": "Conduct", "구하고행하라": "Ask and Act", "은밀한기도": "Prayer in Secret", "하나님의응답": "God's Answer", "그의뜻대로기도함": "Praying According to His Will",
  "중보의기도": "Intercessory Prayer",
  // 180 5. 그리스도를 증거함
  "모든사람에게전파함": "Proclaiming to Everyone", "하나님의사신이됨": "Ambassadors for God", "하나님을기쁘시게함": "Pleasing God",
  "모든사람을섬김": "Serving Everyone", "시기를분별함": "Discerning the Time", "생명을나눔": "Sharing Our Lives", "죄의실재": "The Reality of Sin",
  "죄의결말": "The End of Sin", "그리스도께서값을치르심": "Christ Paid the Price", "선물로주신구원": "Salvation as a Gift", "믿고영접함": "Believing and Receiving",
  "나는그렇게나쁜사람이아니다": "\"I'm Not That Bad\"", "포기할게너무많다": "\"I'd Have to Give Up Too Much\"", "이해할수없다": "\"I Can't Understand It\"",
  "나는아직그렇게선하지는못하다": "\"I'm Not Good Enough Yet\"", "사람들이어떻게생각할까": "\"What Will People Think?\"",
  "나는지속하지못할것이다": "\"I Won't Be Able to Keep It Up\"", "좀더기다려보겠다": "\"I'll Wait a While\"", "위선자가너무많다": "\"There Are Too Many Hypocrites\"",
  "그리스도를믿을수없다": "\"I Can't Believe in Christ\"", "다른종교는어떠한가": "\"What About Other Religions?\"",
  "하나님은아무도지옥에보내시지않을것이다": "\"God Won't Send Anyone to Hell\"", "이교도들은어떻게되나": "\"What About Those Who Never Heard?\"",
  "구속받음": "Redeemed", "화목하게됨": "Reconciled", "사함받음": "Forgiven", "율법에서해방됨": "Freed from the Law", "하나님께로남": "Born of God",
  "제사장이됨": "Made Priests", "거룩하게됨": "Sanctified", "완전하게됨": "Made Perfect", "의롭다하심": "Justified", "천국시민이됨": "Citizens of Heaven",
  "온전하게됨": "Made Complete"
};

// 중제목(묶음) 영어 이름 — data.js에 영어 이름이 없는 것만
const MINOR_EN = {
  "I. 구원의 확신": "I. Assurance of Salvation", "II. QUIET TIME": "II. Quiet Time", "III. 말씀": "III. The Word", "IV. 기도": "IV. Prayer",
  "V. 교제": "V. Fellowship", "VI. 증거": "VI. Witnessing",
  "1. 하나님을 알아감": "1. Knowing God", "2. 사랑 안에서 자라감": "2. Growing in Love", "3. 믿음 안에서 자라감": "3. Growing in Faith",
  "4. 승리 안에서 행함": "4. Walking in Victory", "5. 그리스도를 증거함": "5. Witnessing for Christ"
};

// 작은 묶음(소제목 위 제목) 영어 이름
const SUB_EN = {
  "1. 왜 Quiet Time을 가져야 하는가": "1. Why Have a Quiet Time?", "2. Quiet Time이란 무엇인가?": "2. What Is a Quiet Time?", "3. Quiet Time의 본": "3. Examples of Quiet Time",
  "1. 말씀의 권위": "1. The Authority of the Word", "2. 말씀의 가치": "2. The Value of the Word", "3. 말씀에 대한 태도": "3. Attitudes Toward the Word",
  "4. 말씀의 섭취 방법 (말씀의 손 예화)": "4. Taking In the Word (The Word Hand)",
  "1. 기도의 명령": "1. The Command to Pray", "2. 기도의 약속과 축복": "2. Promises and Blessings of Prayer", "3. 응답받는 기도의 조건": "3. Conditions for Answered Prayer",
  "4. 기도의 본": "4. Examples of Prayer", "5. 기도의 손 예화": "5. The Prayer Hand",
  "1. 교제의 기초": "1. The Basis of Fellowship", "2. 교제의 중요성": "2. The Importance of Fellowship", "3. 교제의 요소": "3. Elements of Fellowship",
  "4. 교제의 태도": "4. Attitudes in Fellowship", "5. 교제에서의 문제해결": "5. Resolving Problems in Fellowship",
  "1. 전도는 누구의 책임인가?": "1. Whose Responsibility Is Evangelism?", "2. 왜 전도를 해야 하나?": "2. Why Evangelize?", "3. 어떻게 전도하나?": "3. How to Evangelize",
  "4. 전도의 모범": "4. Examples of Evangelism", "5. 다리 예화 (총 27구절)": "5. The Bridge Illustration (27 verses)",
  "(1) 예수 그리스도": "(1) Jesus Christ", "(2) 성령": "(2) The Holy Spirit", "(3) 하나님": "(3) God",
  "(1) 사랑으로 말함": "(1) Speaking in Love", "(2) 사랑으로 대함": "(2) Treating Others in Love", "(3) 사랑으로 행함": "(3) Acting in Love",
  "(1) 약속": "(1) Promises", "(2) 말씀": "(2) The Word", "(3) 믿음": "(3) Faith",
  "(1) 승리": "(1) Victory", "(2) 순결": "(2) Purity", "(3) 기도": "(3) Prayer",
  "(1) 전도": "(1) Evangelism", "(2) 변명": "(2) Excuses", "(3) 신자의 위치": "(3) The Believer's Position"
};
