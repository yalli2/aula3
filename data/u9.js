AULA.unit({
  n: 9, title: 'Tenemos que hablar', ko: '우리 얘기 좀 해 — 관계와 감정',
  goal: '관심사와 감정 표현하기, 인간관계 이야기하기, 다양한 수준으로 반대 의견 말하고 반박하기',
  can: ['me encanta / odio / no aguanto + 명사·원형', '… + que + 접속법', '반대 의견 (격식/비격식)', '부드럽게 반대하기', '반박하기'],
  tags: ['sentimientos', 'que + subjuntivo', 'desacuerdo', 'contraargumentar', 'relaciones', 'manías', 'carácter'],
  vocab: [
    { g: '감정 동사 · Sentimientos', w: [['me fascina', '정말 매혹적이야'], ['me encanta', '정말 좋아'], ['me gusta', '좋아'], ['me da igual', '상관없어'], ['me molesta', '거슬려'], ['me pone nervioso/-a', '날 신경질 나게 해'], ['me da rabia', '열 받아'], ['me preocupa', '걱정돼'], ['me da miedo', '무서워'], ['odio', '정말 싫어'], ['no soporto / no aguanto', '못 참겠어']] },
    { g: '버릇 · Manías', w: [['dejar la ropa por el suelo', '옷을 바닥에 벗어 두다'], ['llegar siempre tarde', '항상 늦다'], ['mirar el móvil mientras hablas', '대화 중 휴대폰 보다'], ['hablar con la boca llena', '입에 음식 넣고 말하다'], ['no bajar la tapa del váter', '변기 뚜껑을 안 내리다'], ['interrumpir', '말을 끊다'], ['ser un desastre', '엉망이다']] },
    { g: '성격 · Carácter', w: [['celoso / celosa', '질투심 많은'], ['egoísta', '이기적인'], ['detallista', '세심한'], ['mandón / mandona', '이래라저래라 하는'], ['cabezota', '고집 센'], ['maniático / maniática', '까다로운'], ['comprensivo / comprensiva', '이해심 많은'], ['sincero / sincera', '솔직한']] },
    { g: '반대 의견 · Desacuerdo', w: [['No estoy de acuerdo.', '동의 안 해.'], ['¡Eso no es verdad!', '그건 사실이 아니야!'], ['¡Qué dices!', '무슨 소리야!'], ['¡Ni hablar!', '말도 안 돼!'], ['Yo no lo veo así.', '나는 그렇게 안 봐.'], ['Tienes razón, pero…', '네 말이 맞지만…'], ['Puede ser, pero…', '그럴 수도 있지만…'], ['Ya, pero es que…', '그래, 근데 그게…']] }
  ],
  gram: [
    { h: '감정 표현 + 명사 / 원형', p: '좋아하는 대상이 명사·원형이면 gustar 구조: **me encanta(n)**, **me molesta(n)** · odiar/soportar은 일반 동사: **odio**, **no soporto**', ex: [['Me encantan las sorpresas.', '서프라이즈가 정말 좋아.'], ['No soporto esperar.', '기다리는 걸 못 참아.']] },
    { h: '감정 표현 + que + 접속법', p: '**다른 사람의 행동**에 대한 감정 → que + 접속법', ex: [['Me molesta que mi hermano use mi ropa.', '동생이 내 옷 입는 게 거슬려.'], ['Odio que la gente llegue tarde.', '사람들이 늦게 오는 게 정말 싫어.'], ['Me encanta que me escribas cartas.', '네가 편지를 써 주는 게 정말 좋아.']] },
    { h: '부드럽게 반대하기 → 반박하기', ex: [['Tienes razón, pero también es verdad que…', '네 말이 맞아, 하지만 …도 사실이야.'], ['Sí, ya lo sé, pero es que…', '응, 알아, 근데 그게…'], ['Yo no diría eso…', '나라면 그렇게 말하지 않겠어…']] }
  ],
  ex: [
    { k: 'fill', t: '원형? que + 접속법?', it: ['Me encanta {*bailar|que baile} salsa. (나 자신)', 'Me molesta {interrumpir|*que me interrumpan}. (다른 사람이)', 'Odio {*madrugar|que madrugue} los domingos.', 'No soporto {mentir|*que me mientan}.', 'Me pone nerviosa {esperar|*que la gente no conteste} los mensajes.'] },
    { k: 'fill', t: 'que + 접속법 형태', it: ['Me molesta que mi compañero de piso no [friegue] los platos. (fregar)', 'Odio que mis padres [lean] mis mensajes. (leer)', 'Me encanta que mis amigos me [hagan] regalos. (hacer)', 'No aguanto que la gente [hable] alto en el cine. (hablar)', 'Me preocupa que no [estudies] nada. (estudiar, tú)'] },
    { k: 'fill', t: 'encanta / encantan, molesta / molestan', it: ['Me {*encanta|encantan} el olor a café.', 'Me {molesta|*molestan} los ruidos por la noche.', 'Le {*fascina|fascinan} la astronomía.', 'Nos {preocupa|*preocupan} los exámenes.'] },
    { k: 'sort', t: '반대 의견 — 강하게? 부드럽게?', cats: ['💥 fuerte', '🕊️ suave'], it: [['¡Ni hablar!', 0], ['Puede ser, pero…', 1], ['¡Qué dices!', 0], ['Yo no lo veo exactamente así.', 1], ['¡Eso es mentira!', 0], ['Tienes razón, pero…', 1]] },
    { k: 'dlg', t: '듣기 — 커플의 말다툼 (영화 대본)', listen: 1,
      lines: [['Lola', 'Carlos, tenemos que hablar. Me molesta muchísimo que siempre llegues tarde.'], ['Carlos', '¿Siempre? ¡Qué dices! Solo ha sido dos veces esta semana.'], ['Lola', 'Ya, pero es que hoy te he esperado cuarenta minutos.'], ['Carlos', 'Tienes razón, lo siento. Pero a mí tampoco me gusta que mires el móvil mientras hablamos.'], ['Lola', 'Bueno… puede ser. ¿Hacemos un trato?']],
      it: [['Lola를 거슬리게 하는 것은?', '*Carlos가 항상 늦는 것|Carlos가 휴대폰 보는 것|거짓말'], ['오늘 Lola는 얼마나 기다렸나요?', '20분|*40분|1시간'], ['Carlos가 싫어하는 Lola의 버릇은?', '늦는 것|*대화 중 휴대폰 보기|말 끊기'], ['마지막에 Lola가 제안하는 것은?', '헤어지기|*약속(타협)하기|여행 가기']] },
    { k: 'match', t: '성격 형용사', it: [['celoso', '질투심 많은'], ['cabezota', '고집 센'], ['detallista', '세심한'], ['mandón', '이래라저래라 하는'], ['comprensivo', '이해심 많은'], ['egoísta', '이기적인']] },
    { k: 'order', t: '문장 만들기', it: ['Me molesta que llegues tarde.', 'Tienes razón, pero es que estaba cansado.', 'No soporto que me interrumpan.', 'Yo no lo veo así.'] },
    { k: 'dict', t: '받아쓰기', it: ['Odio que me mientan.', 'Me encanta que vengas a verme.', 'Puede ser, pero no estoy de acuerdo.'] },
    { k: 'write', t: '영화 대본 — 룸메이트 말다툼', d: '두 룸메이트가 서로의 버릇에 대해 다투는 장면을 써 보세요. que + 접속법, 반대 표현, 반박 표현을 사용하세요.', model: 'ANA: Sara, tenemos que hablar. No soporto que dejes la ropa por el suelo. SARA: ¡Qué dices! Solo es una camiseta. ANA: Ya, pero es que es así todos los días. SARA: Tienes razón, pero a mí me molesta que pongas música a las siete de la mañana. ANA: Puede ser… Vale, yo bajo la música y tú recoges la ropa. ¿Trato hecho?' }
  ]
});
