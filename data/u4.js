AULA.unit({
  n: 4, title: 'Va y le dice…', ko: '그래서 걔가 말하길… — 이야기·줄거리',
  goal: '현재 시제로 이야기하기, 영화·책 줄거리 요약하기, 일화와 농담 말하기 — 영화 시놉시스 쓰기',
  can: ['이야기 연결어', 'porque · como · aunque · sin embargo', '직접·간접 목적대명사 (lo, le, se lo)'],
  tags: ['conectores', 'pronombres OD / OI', 'se lo', 'sinopsis', 'cine', 'géneros narrativos'],
  vocab: [
    { g: '장르 · Géneros', w: [['la comedia', '코미디'], ['el drama', '드라마'], ['la película de terror', '공포 영화'], ['la ciencia ficción', 'SF'], ['la película de acción', '액션 영화'], ['el thriller', '스릴러'], ['la comedia romántica', '로맨틱 코미디'], ['el documental', '다큐멘터리'], ['la película de animación', '애니메이션'], ['la serie', '시리즈'], ['la novela policíaca', '추리 소설']] },
    { g: '영화 어휘 · Cine y TV', w: [['el argumento', '줄거리'], ['la sinopsis', '시놉시스'], ['el/la protagonista', '주인공'], ['el personaje', '등장인물'], ['el final', '결말'], ['el final feliz', '해피 엔딩'], ['tratar de', '~에 관한 것이다'], ['estar basada en', '~을 바탕으로 하다'], ['transcurrir', '(이야기가) 펼쳐지다'], ['enamorarse de', '~와 사랑에 빠지다'], ['descubrir', '발견하다'], ['el spoiler', '스포일러']] },
    { g: '연결어 · Conectores', w: [['(y) entonces', '그러자'], ['en aquel momento', '그 순간'], ['de repente / de pronto', '갑자기'], ['al final', '결국'], ['porque', '왜냐하면'], ['como', '~이니까 (문장 앞)'], ['aunque', '비록 ~지만'], ['sin embargo', '그러나'], ['así que', '그래서']] }
  ],
  gram: [
    { h: '현재 시제로 이야기하기', p: '줄거리나 농담은 보통 현재형으로! 구어에서는 **va y le dice…** (그러더니 걔한테 말하길…) 같은 표현을 써요.', ex: [['Un hombre entra en una tienda y va y le dice al dependiente…', '한 남자가 가게에 들어가서는 점원에게 말하길…']] },
    { h: 'porque · como · aunque · sin embargo', t: [['연결어', '위치·의미', '예'], ['porque', '원인 (뒤에)', 'No sale porque está cansada.'], ['como', '원인 (문장 앞)', 'Como está cansada, no sale.'], ['aunque', '양보', 'Aunque está cansada, sale.'], ['sin embargo', '대조 (새 문장)', 'Está cansada. Sin embargo, sale.']] },
    { h: '목적대명사 OD + OI', t: [['', '직접 (OD)', '간접 (OI)'], ['yo', 'me', 'me'], ['tú', 'te', 'te'], ['él/ella/usted', 'lo / la', 'le'], ['nosotros', 'nos', 'nos'], ['vosotros', 'os', 'os'], ['ellos/ellas', 'los / las', 'les']], ex: [['Le regala un anillo. → Se lo regala.', '그녀에게 반지를 선물한다 → 그녀에게 그것을 선물한다.']], tip: '**le/les + lo/la/los/las → se lo/se la/se los/se las** (×le lo)' }
  ],
  ex: [
    { k: 'fill', t: 'porque · como · aunque · sin embargo', it: ['[Como] no tenía dinero, no fue al concierto.', 'No fue al concierto [porque] no tenía dinero.', '[Aunque] no tenía dinero, fue al concierto.', 'No tenía dinero. [Sin embargo], fue al concierto.', '[Como] llovía, se quedaron en casa.'] },
    { k: 'fill', t: '간접목적대명사 le / les', it: ['El detective [le] pregunta a la mujer dónde estaba.', 'La protagonista [les] escribe una carta a sus padres.', 'El ladrón [le] roba la cartera a un turista.', 'Mi abuela siempre [nos] cuenta historias. (a nosotros)'] },
    { k: 'fill', t: 'se lo / se la / se los / se las', d: '밑줄 부분을 대명사로 바꾸세요.', it: ['Le da **el libro** a Ana. → [Se lo] da.', 'Les compra **las flores** a sus padres. → [Se las] compra.', 'Le cuenta **la verdad** al policía. → [Se la] cuenta.', 'Le regala **unos zapatos** a su novia. → [Se los] regala.', 'Me presta **la bici**. → [Me la] presta.'] },
    { k: 'mc', t: '어느 장르?', d: '시놉시스를 읽고 장르를 고르세요.', audio: false, it: [['Una nave espacial llega a un planeta desconocido en el año 3000.', 'drama|*ciencia ficción|comedia romántica'], ['Un fantasma aparece cada noche en una casa abandonada.', '*película de terror|documental|comedia'], ['Dos desconocidos se conocen en un tren y se enamoran.', 'thriller|*comedia romántica|acción'], ['La vida real de los pingüinos en la Antártida.', 'animación|ciencia ficción|*documental']] },
    { k: 'tf', t: '읽기 — 영화 시놉시스', text: '**«La última llamada»** (thriller, 2024). Clara es una periodista que trabaja de noche en una radio de Valparaíso. Una noche, un oyente la llama y le cuenta que va a pasar algo terrible al día siguiente. Al principio, Clara piensa que es una broma. Sin embargo, como el hombre sabe muchos detalles de su vida, empieza a investigar. De repente, descubre que la llamada viene de su propio edificio. Aunque la policía no la cree, Clara decide seguir sola…',
      it: [['Clara trabaja en una televisión.', false], ['La historia transcurre en Chile.', true], ['Al principio Clara cree que es una broma.', true], ['La llamada viene de otra ciudad.', false], ['La policía la ayuda mucho.', false]] },
    { k: 'tf', t: '듣기 — 농담 하나', listen: 1, text: 'Un hombre entra en una biblioteca y va y le dice a la bibliotecaria: «Quiero una hamburguesa con patatas, por favor». Y la bibliotecaria le dice: «Señor, esto es una biblioteca». Entonces el hombre, en voz muy baja, le dice: «Perdone… quiero una hamburguesa con patatas, por favor».',
      it: [['El hombre entra en un restaurante.', false], ['Pide una hamburguesa.', true], ['La bibliotecaria le da la comida.', false], ['Al final, el hombre repite lo mismo en voz baja.', true]] },
    { k: 'order', t: '문장 만들기', it: ['Como estaba cansado, se fue a casa.', 'La película trata de una familia en crisis.', 'Aunque no quería, se lo contó todo.', 'De repente alguien llama a la puerta.'] },
    { k: 'match', t: '어휘 연결', it: [['el argumento', '줄거리'], ['el personaje', '등장인물'], ['el final feliz', '해피 엔딩'], ['estar basada en', '~에 바탕을 두다'], ['tratar de', '~에 관한 내용이다']] },
    { k: 'dict', t: '받아쓰기', it: ['La película está basada en una novela.', 'Como no me llamó, no fui.', 'Se lo regaló por su cumpleaños.'] },
    { k: 'write', t: '영화 시놉시스 쓰기', d: '좋아하는 영화(또는 상상한 영화)의 시놉시스를 현재형과 연결어를 사용해 써 보세요. 결말은 스포일러 금지!', model: '«Verano en Busan» es una comedia romántica. Sofía, una chica mexicana, llega a Busan para estudiar coreano. Como no conoce a nadie, se siente muy sola. Un día, en la playa, pierde su móvil y un chico, Jun, se lo devuelve. Aunque al principio no se entienden nada, empiezan a quedar para practicar idiomas. Sin embargo, de repente, Sofía descubre un secreto de Jun…' }
  ]
});
