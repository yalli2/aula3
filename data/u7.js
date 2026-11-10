AULA.unit({
  n: 7, title: 'Mensajes', ko: '메시지 — 전달하기',
  goal: '전화로 소통하기, 메시지 남기고 전하기, 다른 사람의 말·부탁·조언 전달하기',
  can: ['간접화법 (estilo indirecto)', 'me ha dicho que…', 'me ha pedido que + 접속법', 'me ha preguntado si / cuándo…', '전화 표현'],
  tags: ['estilo indirecto', 'transmitir mensajes', 'teléfono', 'recados', 'pedir que + subjuntivo'],
  vocab: [
    { g: '전화 · Por teléfono', w: [['¿Diga? / ¿Sí?', '여보세요?'], ['¿De parte de quién?', '누구시라고 전할까요?'], ['¿Está Laura?', '라우라 있어요?'], ['Ahora no está.', '지금 없어요.'], ['¿Quieres dejarle un recado?', '메시지 남길래?'], ['Ahora se pone.', '지금 바꿔 줄게요.'], ['Se ha equivocado.', '잘못 거셨어요.'], ['Está comunicando.', '통화 중이에요.'], ['No hay cobertura.', '신호가 안 잡혀요.'], ['colgar', '전화를 끊다'], ['devolver la llamada', '다시 전화하다']] },
    { g: '메시지 종류 · Tipos de mensajes', w: [['el mensaje de voz', '음성 메시지'], ['el correo electrónico', '이메일'], ['la nota', '메모'], ['la postal', '엽서'], ['la carta', '편지'], ['el chat del grupo', '단체방'], ['el recado', '전언·메시지']] },
    { g: '전달 동사 · Verbos', w: [['decir', '말하다'], ['preguntar', '묻다'], ['pedir', '부탁하다'], ['recomendar', '추천하다'], ['aconsejar', '조언하다'], ['recordar', '상기시키다'], ['invitar', '초대하다'], ['felicitar', '축하하다'], ['dar las gracias', '감사하다'], ['quejarse', '불평하다'], ['proponer', '제안하다']] }
  ],
  gram: [
    { h: '말 전하기 — 정보', p: '**decir que** + 직설법. 동사·대명사·소유사의 인칭이 바뀌어요.', ex: [['«Estoy enferma.» → Me ha dicho que está enferma.', '아프다고 했어.'], ['«Mañana voy a tu casa.» → Dice que mañana viene a mi casa.', '내일 우리 집에 온대.']] },
    { h: '부탁·명령·조언 전하기 → que + 접속법', ex: [['«Llámame.» → Me ha pedido que la llame.', '자기한테 전화해 달래.'], ['«No llegues tarde.» → Me ha dicho que no llegue tarde.', '늦지 말래.'], ['«Toma más agua.» → Me ha recomendado que tome más agua.', '물을 더 마시래.']] },
    { h: '질문 전하기', t: [['원래 질문', '전달'], ['¿Vienes a la fiesta?', 'Me ha preguntado **si** voy a la fiesta.'], ['¿Cuándo llegas?', 'Me ha preguntado **cuándo** llego.'], ['¿Dónde vives?', 'Me ha preguntado **dónde** vivo.']] }
  ],
  ex: [
    { k: 'fill', t: '정보 전하기', d: '말한 사람: Ana → 듣는 사람: 나.', it: ['«Estoy en el metro.» → Ana dice que [está] en el metro.', '«Tengo mucho trabajo.» → Dice que [tiene] mucho trabajo.', '«Te espero en la puerta.» → Dice que me [espera] en la puerta.', '«Mis padres vienen hoy.» → Dice que [sus] padres vienen hoy.'] },
    { k: 'fill', t: '부탁 전하기 → que + 접속법', it: ['«Llámame esta noche.» → Me ha pedido que la [llame] esta noche.', '«Trae el libro.» → Me ha dicho que [traiga] el libro.', '«No te preocupes.» → Me ha dicho que no me [preocupe].', '«Haz los deberes.» → Mi madre me ha dicho que [haga] los deberes.', '«Ven pronto.» → Me ha pedido que [vaya] pronto.'] },
    { k: 'fill', t: '질문 전하기 — si / qué / cuándo / dónde', it: ['«¿Tienes hambre?» → Me ha preguntado [si] tengo hambre.', '«¿Qué haces mañana?» → Me ha preguntado [qué] hago mañana.', '«¿Dónde está la estación?» → Me ha preguntado [dónde] está la estación.', '«¿Cuándo es el examen?» → Me ha preguntado [cuándo] es el examen.'] },
    { k: 'mc', t: '어떤 전달 동사?', d: '원래 말에 가장 알맞은 동사를 고르세요.', it: [['«¡Feliz cumpleaños!»', 'Me ha preguntado|*Me ha felicitado|Se ha quejado'], ['«¿Quieres venir a cenar?»', '*Me ha invitado a cenar|Me ha recomendado|Me ha recordado'], ['«No olvides la reunión.»', 'Me ha felicitado|*Me ha recordado la reunión|Me ha dado las gracias'], ['«Esta sopa está fría.»', '*Se ha quejado de la sopa|Me ha invitado|Me ha aconsejado']] },
    { k: 'dlg', t: '듣기 — 전화 메시지', listen: 1,
      lines: [['Señora', '¿Diga?'], ['Iker', 'Hola, buenas tardes. ¿Está Nuria?'], ['Señora', 'No, ahora no está. ¿De parte de quién?'], ['Iker', 'Soy Iker, un compañero de clase. ¿Le puede dejar un recado?'], ['Señora', 'Sí, claro.'], ['Iker', 'Dígale que el examen es el jueves, no el miércoles, y que me llame cuando pueda.'], ['Señora', 'Muy bien, se lo digo.']],
      it: [['Iker는 Nuria의 누구?', '사촌|*반 친구|선생님'], ['시험은 언제?', '수요일|*목요일|금요일'], ['Iker의 부탁은?', '*시간 날 때 전화해 달라|이메일 보내 달라|책 가져와 달라']] },
    { k: 'mc', t: '전달 문장 고르기 — 위 통화 내용', d: '엄마가 Nuria에게 전하는 말로 맞는 것은?', audio: false, it: [['', '*Ha llamado Iker. Dice que el examen es el jueves y que lo llames.|Ha llamado Iker. Dice que el examen es el miércoles.|Iker dice que llames a la profesora.']] },
    { k: 'match', t: '전화 표현', it: [['¿De parte de quién?', '누구시라고 전할까요?'], ['Ahora se pone.', '지금 바꿔 줄게요.'], ['Está comunicando.', '통화 중이에요.'], ['Se ha equivocado.', '잘못 거셨어요.'], ['¿Quieres dejar un recado?', '메시지 남길래?']] },
    { k: 'order', t: '문장 만들기', it: ['Me ha pedido que lo llame mañana.', 'Me ha preguntado si quiero ir al cine.', 'Dice que está muy cansada.', '¿Le puedo dejar un recado?'] },
    { k: 'dict', t: '받아쓰기', it: ['Me ha dicho que no puede venir.', 'Te ha preguntado dónde vives.', 'Dile que me llame, por favor.'] },
    { k: 'write', t: '단체방 메시지 전달', d: '선생님이 반 학생들에게 한 말: 「¿Habéis terminado el proyecto? Traed el trabajo el lunes. No olvidéis las fotos. La excursión es el 15.」 결석한 친구에게 전달 메시지를 써 보세요.', model: '¡Hola, Diego! Hoy la profesora nos ha preguntado si hemos terminado el proyecto. Ha dicho que traigamos el trabajo el lunes y que no olvidemos las fotos. También nos ha recordado que la excursión es el día 15. ¡Nos vemos!' }
  ]
});
