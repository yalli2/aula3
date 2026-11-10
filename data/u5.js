AULA.unit({
  n: 5, title: 'Busque y compare', ko: '찾아보고 비교하세요 — 광고 캠페인',
  goal: '추천·조언하기, 지시하기, 광고 묘사하기 — 광고 캠페인 기획·발표하기',
  can: ['긍정·부정 명령형', '재귀·목적대명사의 위치', '광고 어휘', '집안일'],
  tags: ['imperativo afirmativo', 'imperativo negativo', 'pronombres', 'publicidad', 'tareas del hogar'],
  vocab: [
    { g: '광고 · Publicidad', w: [['el anuncio', '광고'], ['el eslogan', '슬로건'], ['la marca', '브랜드'], ['el producto', '제품'], ['el público objetivo', '타깃 고객'], ['la campaña', '캠페인'], ['el cartel', '포스터'], ['la valla publicitaria', '옥외 광고판'], ['las redes sociales', 'SNS'], ['el/la influencer', '인플루언서'], ['la imagen', '이미지'], ['transmitir valores', '가치를 전하다']] },
    { g: '광고가 전하는 가치', w: [['la juventud', '젊음'], ['la libertad', '자유'], ['el éxito', '성공'], ['la seguridad', '안전'], ['la amistad', '우정'], ['la salud', '건강'], ['la elegancia', '우아함'], ['la sostenibilidad', '지속 가능성']] },
    { g: '집안일 · Tareas del hogar', w: [['poner la lavadora', '세탁기를 돌리다'], ['tender la ropa', '빨래를 널다'], ['planchar', '다림질하다'], ['fregar los platos', '설거지하다'], ['barrer', '쓸다'], ['pasar la aspiradora', '청소기를 돌리다'], ['hacer la cama', '침대를 정리하다'], ['sacar la basura', '쓰레기를 버리다'], ['limpiar el polvo', '먼지를 닦다'], ['hacer la compra', '장보다']] }
  ],
  gram: [
    { h: '긍정 명령형', t: [['', '-ar (comprar)', '-er (beber)', '-ir (abrir)'], ['tú', 'compra', 'bebe', 'abre'], ['usted', 'compre', 'beba', 'abra'], ['vosotros', 'comprad', 'bebed', 'abrid'], ['ustedes', 'compren', 'beban', 'abran']], tip: 'tú 불규칙: di, haz, ve, pon, sal, sé, ten, ven' },
    { h: '부정 명령형 (no + 접속법 현재)', t: [['', 'comprar', 'beber', 'abrir'], ['tú', 'no compres', 'no bebas', 'no abras'], ['usted', 'no compre', 'no beba', 'no abra'], ['vosotros', 'no compréis', 'no bebáis', 'no abráis'], ['ustedes', 'no compren', 'no beban', 'no abran']], ex: [['No esperes más: ¡compra ya!', '더 기다리지 마. 지금 사!'], ['No se preocupe, nosotros lo hacemos.', '걱정 마세요, 저희가 해 드립니다.']] },
    { h: '대명사의 위치', p: '긍정 명령: 동사 **뒤에 붙여** (악센트 주의!) · 부정 명령: 동사 **앞**에', ex: [['Pruébalo. / No lo pruebes.', '먹어 봐. / 먹어 보지 마.'], ['Dúchate. / No te duches.', '샤워해. / 샤워하지 마.'], ['Dáselo. / No se lo des.', '그에게 그걸 줘. / 주지 마.']] }
  ],
  ex: [
    { k: 'fill', t: '긍정 명령형 (tú)', it: ['[Prueba] nuestro nuevo helado de mango. (probar)', '[Haz] la cama antes de salir. (hacer)', '[Ven] a conocer nuestra tienda. (venir)', '[Pon] la lavadora, por favor. (poner)', '[Descubre] el sabor del verano. (descubrir)'] },
    { k: 'fill', t: '긍정 명령형 (usted)', it: ['[Busque] y compare. (buscar)', '[Llame] ahora al 900 123 456. (llamar)', '[Disfrute] de unas vacaciones únicas. (disfrutar)', '[Venga] a vernos. (venir)', '[Haga] su pedido online. (hacer)'] },
    { k: 'fill', t: '부정 명령형', it: ['No [esperes] más. (esperar, tú)', 'No [pierda] esta oportunidad. (perder, usted)', 'No [salgas] sin paraguas. (salir, tú)', 'No [toquéis] nada. (tocar, vosotros)', 'No [vayas] solo. (ir, tú)'] },
    { k: 'fill', t: '대명사 붙이기', d: '명령형 + 대명사 (악센트 주의)', it: ['¿El pastel? [Pruébalo]. (probar, tú + lo)', '¿La ropa? No [la planches]. (planchar, tú)', 'Hijo, [levántate]: son las ocho. (levantarse)', '¿Las llaves? [Dámelas]. (dar, tú + me + las)', 'No [te preocupes]. (preocuparse, tú)'] },
    { k: 'mc', t: '광고 슬로건이 전하는 가치', it: [['«Vive sin límites. Viaja con nosotros.»', 'la seguridad|*la libertad|la salud'], ['«Con nosotros, tu familia siempre protegida.»', '*la seguridad|la juventud|el éxito'], ['«Siéntete joven otra vez.»', 'la amistad|*la juventud|la elegancia'], ['«Cuida el planeta: elige envases reciclables.»', 'el éxito|la libertad|*la sostenibilidad']] },
    { k: 'dlg', t: '듣기 — 룸메이트 집안일 분담', listen: 1,
      lines: [['Marta', 'Bueno, vamos a organizar las tareas. Pedro, tú friega los platos por las noches.'], ['Pedro', 'Vale, pero entonces no me pidas que planche, ¡lo odio!'], ['Marta', 'Tranquilo. Lucía, saca la basura y pasa la aspiradora los sábados.'], ['Lucía', 'De acuerdo. ¿Y tú, Marta?'], ['Marta', 'Yo hago la compra y pongo la lavadora.']],
      it: [['Pedro의 일은?', '청소기|*설거지|장보기'], ['Pedro가 싫어하는 것은?', '설거지|*다림질|쓰레기'], ['Lucía는 언제 청소기를?', '매일|*토요일|일요일'], ['Marta의 일은?', '*장보기와 세탁|설거지|다림질']] },
    { k: 'match', t: '집안일 연결', it: [['fregar los platos', '설거지하다'], ['tender la ropa', '빨래를 널다'], ['pasar la aspiradora', '청소기를 돌리다'], ['sacar la basura', '쓰레기를 버리다'], ['hacer la cama', '침대를 정리하다'], ['planchar', '다림질하다']] },
    { k: 'order', t: '광고 문장 만들기', it: ['No esperes más y pruébalo hoy.', 'Busque y compare nuestros precios.', 'Descubre el placer de viajar.', 'No te lo pierdas.'] },
    { k: 'dict', t: '받아쓰기', it: ['Llame ahora y reciba un regalo.', 'No te olvides de sacar la basura.', 'Pruébalo y verás.'] },
    { k: 'write', t: '광고 캠페인 기획', d: '가상 제품을 정하고 제품명, 타깃, 전하는 가치, 슬로건, 광고 문구(명령형 3개 이상)를 써 보세요.', model: 'Producto: «EcoBotella», una botella reutilizable que filtra el agua. Público objetivo: estudiantes y deportistas. Valores: salud y sostenibilidad. Eslogan: «Bebe bien, vive mejor». Texto: ¿Cansado de comprar agua en plástico? No tires más botellas. Llena tu EcoBotella en cualquier grifo y llévala contigo. ¡Pruébala y únete al cambio!' }
  ]
});
