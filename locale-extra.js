// Traditional Chinese, Spanish, French, Japanese and Korean copy for the shared gallery and feature panels.
const extraCopies = {
  "es": {
    "screenshots": [
      {
        "src": "assets/SmallHouse.png",
        "title": "Efectos de sombras",
        "alt": "Captura de ModraUp: una casa pequeña con sombra sobre el suelo",
        "description": "Una casa pequeña y su sombra sobre el suelo muestran el efecto de las sombras en los volúmenes arquitectónicos."
      },
      {
        "src": "assets/Add3DText.png",
        "title": "Texto 3D con scripts",
        "alt": "Captura de ModraUp: letras 3D de ModraUp creadas con Ruby",
        "description": "Crea letras 3D de ModraUp desde la consola Ruby para explorar la generación de geometría con scripts."
      },
      {
        "src": "assets/Secion.png",
        "title": "Planos de sección",
        "alt": "Captura de ModraUp: una cocina con varios planos de sección",
        "description": "Usa varios planos de sección para examinar el interior de la cocina y sus detalles constructivos."
      },
      {
        "src": "assets/BigTerrain.png",
        "title": "Prueba de modelo de terreno",
        "alt": "Captura de ModraUp: un modelo de terreno grande con datos de rendimiento",
        "description": "Prueba de manejo de un modelo de terreno grande, con los datos de rendimiento originales de la vista."
      },
      {
        "src": "assets/BigModel-1.png",
        "title": "Edificio comercial · Detalle",
        "alt": "Captura de ModraUp: detalle exterior de un gran edificio comercial",
        "description": "Prueba exterior de un gran edificio comercial que muestra detalles de la fachada, materiales y la plaza."
      },
      {
        "src": "assets/BigModel-2.png",
        "title": "Edificio comercial · Vista aérea",
        "alt": "Captura de ModraUp: vista aérea de un gran modelo de edificio comercial",
        "description": "Vista aérea de prueba del mismo edificio comercial, con las torres, cubiertas y distribución del conjunto."
      }
    ],
    "features": {
      "modeling": {
        "number": "01 / MODELADO",
        "title": [
          "Dibuja un perfil.",
          "Dale profundidad."
        ],
        "description": "Empieza con líneas, rectángulos y círculos y convierte caras en sólidos con extrusión. El ajuste a extremos, puntos medios e intersecciones, el bloqueo de ejes y la entrada numérica te ayudan a modelar con precisión.",
        "tags": [
          "Herramientas de dibujo",
          "Extrusión y equidistancia",
          "Mover / Girar / Escalar",
          "Sígueme"
        ],
        "heading": "Convierte ideas en geometría",
        "rows": [
          [
            "R",
            "Empieza con un perfil",
            "Líneas, rectángulos, círculos, polígonos y arcos."
          ],
          [
            "P",
            "Crea volumen",
            "Extruye perpendicularmente a la cara con distancias definidas y operaciones repetidas."
          ],
          [
            "M",
            "Ajusta la forma",
            "Mueve, gira, escala, copia y crea matrices."
          ]
        ],
        "footer": "Ajuste por inferencia · Bloqueo de ejes · Entrada numérica"
      },
      "organize": {
        "number": "02 / ORGANIZACIÓN",
        "title": [
          "Modelos complejos.",
          "Estructura clara."
        ],
        "description": "Separa la geometría en grupos y reutiliza definiciones con componentes. Haz doble clic para editar contenido anidado. Los grupos son independientes; las instancias de un mismo componente comparten los cambios.",
        "tags": [
          "Edición anidada",
          "Componentes reutilizables",
          "Explorador de componentes",
          "Copiar y pegar"
        ],
        "heading": "Cada parte en su lugar",
        "rows": [
          [
            "G",
            "Organiza la geometría",
            "Agrupa la geometría para moverla, girarla o escalarla en conjunto."
          ],
          [
            "C",
            "Reutiliza componentes",
            "Las instancias de una misma definición comparten las ediciones."
          ],
          [
            "↳",
            "Edita contenido anidado",
            "Haz doble clic para entrar y pulsa Esc para volver al nivel superior."
          ]
        ],
        "footer": "Grupos independientes · Definiciones compartidas · Edición anidada"
      },
      "appearance": {
        "number": "03 / EXPRESIÓN",
        "title": [
          "Tu espacio.",
          "Tu expresión."
        ],
        "description": "Aplica colores y texturas, ajusta las aristas y los estilos y define la hora para las sombras solares. Guarda vistas como escenas, explora el interior con planos de sección y añade anotaciones o texto 3D.",
        "tags": [
          "Materiales y texturas",
          "Aristas y estilos",
          "Sombras solares",
          "Secciones y texto"
        ],
        "heading": "Da vida a la geometría",
        "rows": [
          [
            "C",
            "Define los materiales",
            "Colores, texturas, opacidad y muestreo en la vista."
          ],
          [
            "L",
            "Estudia las sombras",
            "Ajusta la fecha y la hora para explorar las sombras solares."
          ],
          [
            "S",
            "Explora el interior",
            "Recorte y relleno de secciones, con ajustes guardados en el formato nativo."
          ]
        ],
        "footer": "Vistas de escena · Planos de sección · Anotaciones"
      },
      "extend": {
        "number": "04 / EXTENSIONES",
        "title": [
          "Tus herramientas.",
          "Tu flujo de trabajo."
        ],
        "description": "Crea y modifica modelos con la API Ruby, explora la automatización en la consola y desarrolla extensiones con barras de herramientas e interfaces HTML. La API sigue evolucionando; cada plugin existente requiere una comprobación de compatibilidad.",
        "tags": [
          "Consola Ruby",
          "Nombres de API familiares",
          "Barras de herramientas propias",
          "Interfaces HTML"
        ],
        "heading": "Crea herramientas para tareas repetitivas",
        "rows": [
          [
            "rb",
            "Trabaja con modelos",
            "Accede a modelos, entidades, materiales y componentes."
          ],
          [
            "UI",
            "Crea interfaces",
            "Menús, barras de herramientas, diálogos HTML y paneles."
          ],
          [
            "⚙",
            "Carga extensiones",
            "Carga extensiones Ruby y comprueba su funcionamiento de forma individual."
          ]
        ],
        "footer": "En desarrollo · La API de SketchUp aún no está cubierta por completo"
      }
    },
    "enlargeLabel": "Ampliar: "
  },
  "fr": {
    "screenshots": [
      {
        "src": "assets/SmallHouse.png",
        "title": "Effets d’ombres",
        "alt": "Capture de ModraUp : une petite maison et son ombre au sol",
        "description": "Une petite maison et son ombre au sol illustrent les effets d’ombres sur les volumes architecturaux."
      },
      {
        "src": "assets/Add3DText.png",
        "title": "Texte 3D par script",
        "alt": "Capture de ModraUp : lettrage 3D ModraUp créé avec Ruby",
        "description": "Créez un lettrage 3D ModraUp depuis la console Ruby pour explorer la génération de géométrie par script."
      },
      {
        "src": "assets/Secion.png",
        "title": "Plans de coupe",
        "alt": "Capture de ModraUp : une cuisine avec plusieurs plans de coupe",
        "description": "Utilisez plusieurs plans de coupe pour examiner la cuisine et ses détails de construction."
      },
      {
        "src": "assets/BigTerrain.png",
        "title": "Test d’un modèle de terrain",
        "alt": "Capture de ModraUp : un grand modèle de terrain avec ses données de performance",
        "description": "Test de manipulation d’un grand modèle de terrain, avec les données de performance originales de la vue."
      },
      {
        "src": "assets/BigModel-1.png",
        "title": "Bâtiment commercial · Détail",
        "alt": "Capture de ModraUp : détail extérieur d’un grand modèle de bâtiment commercial",
        "description": "Test extérieur d’un modèle de bâtiment commercial montrant les façades, les matériaux et la place."
      },
      {
        "src": "assets/BigModel-2.png",
        "title": "Bâtiment commercial · Vue aérienne",
        "alt": "Capture de ModraUp : vue aérienne d’un grand modèle de bâtiment commercial",
        "description": "Vue aérienne de test du même bâtiment commercial, montrant les tours, les toitures et l’organisation du site."
      }
    ],
    "features": {
      "modeling": {
        "number": "01 / MODÉLISATION",
        "title": [
          "Dessinez un profil.",
          "Donnez-lui du volume."
        ],
        "description": "Commencez par des lignes, des rectangles et des cercles, puis transformez les faces en volumes par extrusion. Les accrochages aux extrémités, milieux et intersections, le verrouillage des axes et la saisie numérique assurent la précision.",
        "tags": [
          "Outils de dessin",
          "Extrusion et décalage",
          "Déplacer / Pivoter / Redimensionner",
          "Suivez-moi"
        ],
        "heading": "Transformez vos idées en géométrie",
        "rows": [
          [
            "R",
            "Commencez par un profil",
            "Lignes, rectangles, cercles, polygones et arcs."
          ],
          [
            "P",
            "Créez du volume",
            "Extrudez perpendiculairement à une face, avec des distances définies et des opérations répétées."
          ],
          [
            "M",
            "Affinez la forme",
            "Déplacez, pivotez, redimensionnez, copiez et créez des réseaux."
          ]
        ],
        "footer": "Accrochage par inférence · Verrouillage des axes · Saisie numérique"
      },
      "organize": {
        "number": "02 / ORGANISATION",
        "title": [
          "Des modèles complexes.",
          "Une structure claire."
        ],
        "description": "Isolez la géométrie avec des groupes et réutilisez les définitions avec des composants. Double-cliquez pour modifier le contenu imbriqué. Les groupes restent indépendants ; les instances d’un même composant partagent les modifications.",
        "tags": [
          "Édition imbriquée",
          "Composants réutilisables",
          "Navigateur de composants",
          "Copier et coller"
        ],
        "heading": "Chaque élément à sa place",
        "rows": [
          [
            "G",
            "Organisez la géométrie",
            "Groupez la géométrie pour la déplacer, la faire pivoter ou la redimensionner ensemble."
          ],
          [
            "C",
            "Réutilisez les composants",
            "Les instances d’une même définition partagent les modifications."
          ],
          [
            "↳",
            "Modifiez le contenu imbriqué",
            "Double-cliquez pour entrer ; appuyez sur Échap pour revenir au niveau supérieur."
          ]
        ],
        "footer": "Groupes indépendants · Définitions partagées · Édition imbriquée"
      },
      "appearance": {
        "number": "03 / EXPRESSION",
        "title": [
          "Votre espace.",
          "Votre expression."
        ],
        "description": "Appliquez des couleurs et des textures, ajustez les arêtes et les styles, puis réglez l’heure des ombres solaires. Enregistrez des vues comme scènes, examinez l’intérieur avec des plans de coupe et ajoutez des annotations ou du texte 3D.",
        "tags": [
          "Matériaux et textures",
          "Arêtes et styles",
          "Ombres solaires",
          "Coupes et texte"
        ],
        "heading": "Donnez vie à la géométrie",
        "rows": [
          [
            "C",
            "Définissez les matériaux",
            "Couleurs, textures, opacité et échantillonnage dans la vue."
          ],
          [
            "L",
            "Étudiez les ombres",
            "Réglez la date et l’heure pour explorer les ombres solaires."
          ],
          [
            "S",
            "Explorez l’intérieur",
            "Découpe et remplissage des sections, avec les réglages conservés dans le format natif."
          ]
        ],
        "footer": "Vues de scènes · Plans de coupe · Annotations"
      },
      "extend": {
        "number": "04 / EXTENSIONS",
        "title": [
          "Vos outils.",
          "Votre méthode."
        ],
        "description": "Créez et modifiez des modèles avec l’API Ruby, explorez l’automatisation dans la console et développez des extensions avec des barres d’outils et des interfaces HTML. L’API évolue ; chaque plugin existant nécessite un test de compatibilité.",
        "tags": [
          "Console Ruby",
          "Noms d’API familiers",
          "Barres d’outils personnalisées",
          "Interfaces HTML"
        ],
        "heading": "Créez des outils pour les tâches répétitives",
        "rows": [
          [
            "rb",
            "Travaillez sur les modèles",
            "Accédez aux modèles, entités, matériaux et composants."
          ],
          [
            "UI",
            "Créez des interfaces",
            "Menus, barres d’outils, boîtes de dialogue HTML et panneaux."
          ],
          [
            "⚙",
            "Chargez des extensions",
            "Chargez les extensions Ruby et vérifiez leur comportement individuellement."
          ]
        ],
        "footer": "En développement · L’API SketchUp n’est pas entièrement couverte"
      }
    },
    "enlargeLabel": "Agrandir : "
  },
  "ja": {
    "screenshots": [
      {
        "src": "assets/SmallHouse.png",
        "title": "影の表現",
        "alt": "ModraUp の実機画像：小さな家と地面に落ちる影",
        "description": "小さな家と地面への投影を通して、建築形状の影の表現をご紹介します。"
      },
      {
        "src": "assets/Add3DText.png",
        "title": "スクリプトで 3D 文字を作成",
        "alt": "ModraUp の実機画像：Ruby で作成した ModraUp の立体文字",
        "description": "Ruby コンソールで ModraUp の立体文字を作り、スクリプトによる形状生成を確認できます。"
      },
      {
        "src": "assets/Secion.png",
        "title": "断面表示",
        "alt": "ModraUp の実機画像：複数の断面平面を使ったキッチンモデル",
        "description": "複数の断面平面を使って、キッチンモデルの内部構造や細部を確認できます。"
      },
      {
        "src": "assets/BigTerrain.png",
        "title": "大規模モデルテスト · 地形",
        "alt": "ModraUp の実機画像：地形の大規模モデルと性能情報",
        "description": "地形の大規模モデルの操作テスト。ビューポート内の性能情報もそのまま表示しています。"
      },
      {
        "src": "assets/BigModel-1.png",
        "title": "商業建築 · 近景",
        "alt": "ModraUp の実機画像：商業建築の大規模モデルを屋外から見た近景",
        "description": "商業建築の大規模モデルを屋外からテスト。外壁、マテリアル、広場の細部を近景で確認できます。"
      },
      {
        "src": "assets/BigModel-2.png",
        "title": "商業建築 · 俯瞰",
        "alt": "ModraUp の実機画像：商業建築の大規模モデルの俯瞰ビュー",
        "description": "同じ商業建築モデルを俯瞰したテスト画面。建物群、屋根、敷地の配置をご覧いただけます。"
      }
    ],
    "features": {
      "modeling": {
        "number": "01 / モデリング",
        "title": [
          "輪郭を描いて、",
          "立体にする。"
        ],
        "description": "直線、長方形、円から始め、プッシュ／プルで面に厚みを与えます。端点、中点、交点へのスナップ、軸の固定、数値入力を組み合わせ、アイデアを正確に形にできます。",
        "tags": [
          "描画ツール",
          "プッシュ／プルとオフセット",
          "移動 / 回転 / 拡大縮小",
          "フォローミー"
        ],
        "heading": "アイデアを形にする",
        "rows": [
          [
            "R",
            "輪郭から始める",
            "直線、長方形、円、多角形、円弧。"
          ],
          [
            "P",
            "厚みを与える",
            "面の法線方向に押し出し。距離指定や繰り返し操作に対応。"
          ],
          [
            "M",
            "形を整える",
            "移動、回転、拡大縮小、コピー、配列。"
          ]
        ],
        "footer": "推論スナップ · 軸の固定 · 数値入力"
      },
      "organize": {
        "number": "02 / モデルの整理",
        "title": [
          "複雑なモデルも、",
          "すっきり整理。"
        ],
        "description": "グループで形状を分離し、コンポーネントで定義を再利用。ダブルクリックで階層内を編集できます。グループは独立して変更でき、同じコンポーネントのインスタンスには編集内容が共有されます。",
        "tags": [
          "階層編集",
          "コンポーネントの再利用",
          "コンポーネントブラウザー",
          "コピーと貼り付け"
        ],
        "heading": "各パーツを適切な場所へ",
        "rows": [
          [
            "G",
            "形状を整理する",
            "形状をグループ化し、まとめて移動、回転、拡大縮小。"
          ],
          [
            "C",
            "コンポーネントを再利用",
            "同じ定義のインスタンスに編集内容を共有。"
          ],
          [
            "↳",
            "階層内を編集する",
            "ダブルクリックで入り、Esc で親の編集階層へ戻ります。"
          ]
        ],
        "footer": "独立したグループ · 定義の共有 · 階層編集"
      },
      "appearance": {
        "number": "03 / 空間表現",
        "title": [
          "あなたの空間に、",
          "あなたらしい表現を。"
        ],
        "description": "色やテクスチャを適用し、エッジや表示スタイル、太陽による影の時刻を調整。ビューをシーンとして保存し、断面平面で内部を確認し、注釈や 3D 文字を追加できます。",
        "tags": [
          "マテリアルとテクスチャ",
          "エッジとスタイル",
          "太陽による影",
          "断面と文字"
        ],
        "heading": "形に表情を与える",
        "rows": [
          [
            "C",
            "マテリアルを設定",
            "色、テクスチャ、不透明度、ビューポートでのサンプリング。"
          ],
          [
            "L",
            "影を確認する",
            "日付と時刻を調整し、太陽の影を確認。"
          ],
          [
            "S",
            "内部を見る",
            "断面の切り抜きと塗りつぶし。設定はネイティブ形式で保存。"
          ]
        ],
        "footer": "シーンビュー · 断面平面 · 文字注釈"
      },
      "extend": {
        "number": "04 / 拡張機能",
        "title": [
          "あなたのツールを、",
          "ワークフローに。"
        ],
        "description": "Ruby API でモデルを作成・編集し、コンソールで自動化を試せます。ツールバーや HTML インターフェースを使った拡張機能の開発にも対応。API は開発中のため、既存プラグインの互換性は個別に検証が必要です。",
        "tags": [
          "Ruby コンソール",
          "使い慣れた API 名",
          "独自のツールバー",
          "HTML インターフェース"
        ],
        "heading": "繰り返す作業を、自分の道具で",
        "rows": [
          [
            "rb",
            "モデルを操作する",
            "モデル、エンティティ、マテリアル、コンポーネントへのアクセス。"
          ],
          [
            "UI",
            "インターフェースを作る",
            "メニュー、ツールバー、HTML ダイアログ、トレイ。"
          ],
          [
            "⚙",
            "拡張機能を読み込む",
            "Ruby 拡張機能を読み込み、動作を個別に確認。"
          ]
        ],
        "footer": "開発中 · SketchUp API への対応は一部のみ"
      }
    },
    "enlargeLabel": "拡大："
  },
  "ko": {
    "screenshots": [
      {
        "src": "assets/SmallHouse.png",
        "title": "그림자 효과",
        "alt": "ModraUp 스크린샷: 작은 집과 지면의 그림자",
        "description": "작은 집과 지면에 드리워진 그림자를 통해 건축 형태의 그림자 효과를 보여줍니다."
      },
      {
        "src": "assets/Add3DText.png",
        "title": "스크립트로 3D 텍스트 만들기",
        "alt": "ModraUp 스크린샷: Ruby로 만든 ModraUp 3D 텍스트",
        "description": "Ruby 콘솔로 ModraUp 3D 텍스트를 만들며 스크립트를 통한 형상 생성을 살펴봅니다."
      },
      {
        "src": "assets/Secion.png",
        "title": "단면 표시",
        "alt": "ModraUp 스크린샷: 여러 단면 평면이 적용된 주방 모델",
        "description": "여러 단면 평면으로 주방 모델의 내부 구조와 시공 세부 사항을 확인합니다."
      },
      {
        "src": "assets/BigTerrain.png",
        "title": "대형 모델 테스트 · 지형",
        "alt": "ModraUp 스크린샷: 성능 정보가 표시된 대형 지형 모델",
        "description": "대형 지형 모델의 조작 테스트 화면으로, 뷰포트의 원래 성능 정보를 함께 보여줍니다."
      },
      {
        "src": "assets/BigModel-1.png",
        "title": "상업 건축물 · 근접 뷰",
        "alt": "ModraUp 스크린샷: 대형 상업 건축물의 실외 근접 뷰",
        "description": "상업 건축물의 실외 모델 테스트로, 외벽과 재질, 광장의 세부 사항을 보여줍니다."
      },
      {
        "src": "assets/BigModel-2.png",
        "title": "상업 건축물 · 조감 뷰",
        "alt": "ModraUp 스크린샷: 대형 상업 건축물의 실외 조감 뷰",
        "description": "같은 상업 건축물 모델의 조감 테스트 화면으로, 건물과 지붕, 부지 배치를 보여줍니다."
      }
    ],
    "features": {
      "modeling": {
        "number": "01 / 모델링",
        "title": [
          "윤곽을 그리고,",
          "입체로 만드세요."
        ],
        "description": "선, 사각형, 원에서 시작해 밀기/끌기로 면을 입체로 만드세요. 끝점, 중점, 교차점 스냅과 축 고정, 수치 입력을 함께 사용해 정밀하게 모델링할 수 있습니다.",
        "tags": [
          "그리기 도구",
          "밀기/끌기 및 오프셋",
          "이동 / 회전 / 크기 조절",
          "따라가기"
        ],
        "heading": "아이디어를 형상으로",
        "rows": [
          [
            "R",
            "윤곽에서 시작하기",
            "선, 사각형, 원, 다각형, 호."
          ],
          [
            "P",
            "입체 만들기",
            "면의 법선 방향으로 돌출하며, 거리 지정과 반복 작업을 지원합니다."
          ],
          [
            "M",
            "형태 다듬기",
            "이동, 회전, 크기 조절, 복사 및 배열 생성."
          ]
        ],
        "footer": "추론 스냅 · 축 고정 · 수치 입력"
      },
      "organize": {
        "number": "02 / 정리",
        "title": [
          "복잡한 모델도,",
          "깔끔하게 정리하세요."
        ],
        "description": "그룹으로 형상을 분리하고 구성 요소로 정의를 재사용하세요. 두 번 클릭하면 중첩된 내용을 편집할 수 있습니다. 그룹은 독립적으로 수정되며, 같은 구성 요소의 인스턴스는 변경 사항을 공유합니다.",
        "tags": [
          "중첩 편집",
          "구성 요소 재사용",
          "구성 요소 탐색기",
          "복사 및 붙여넣기"
        ],
        "heading": "각 부분을 제자리에",
        "rows": [
          [
            "G",
            "형상 정리하기",
            "형상을 그룹으로 묶어 함께 이동, 회전하거나 크기를 조절합니다."
          ],
          [
            "C",
            "구성 요소 재사용하기",
            "같은 정의의 인스턴스들이 편집 결과를 공유합니다."
          ],
          [
            "↳",
            "중첩 내용 편집하기",
            "두 번 클릭해 들어가고, Esc로 상위 편집 단계로 돌아갑니다."
          ]
        ],
        "footer": "독립 그룹 · 정의 공유 · 중첩 편집"
      },
      "appearance": {
        "number": "03 / 표현",
        "title": [
          "당신의 공간에,",
          "당신만의 표현을."
        ],
        "description": "색상과 텍스처를 적용하고 모서리와 표시 스타일, 태양 그림자의 시간을 조절하세요. 뷰를 장면으로 저장하고 단면으로 내부를 살펴보며 주석이나 3D 텍스트를 추가할 수 있습니다.",
        "tags": [
          "재질 및 텍스처",
          "모서리 및 스타일",
          "태양 그림자",
          "단면 및 텍스트"
        ],
        "heading": "형상에 생동감을",
        "rows": [
          [
            "C",
            "재질 설정하기",
            "색상, 텍스처, 불투명도 및 뷰포트 샘플링."
          ],
          [
            "L",
            "그림자 살펴보기",
            "날짜와 시간을 조절해 태양 그림자를 살펴봅니다."
          ],
          [
            "S",
            "내부 살펴보기",
            "단면 절단과 채우기를 지원하며, 설정은 기본 형식에 저장됩니다."
          ]
        ],
        "footer": "장면 뷰 · 단면 평면 · 텍스트 주석"
      },
      "extend": {
        "number": "04 / 확장 기능",
        "title": [
          "당신의 도구를,",
          "작업 흐름에 맞게."
        ],
        "description": "Ruby API로 모델을 만들고 수정하며 콘솔에서 자동화를 시도하세요. 도구 모음과 HTML 인터페이스로 확장 기능도 만들 수 있습니다. API는 개발 중이며 기존 플러그인은 개별 호환성 검증이 필요합니다.",
        "tags": [
          "Ruby 콘솔",
          "익숙한 API 이름",
          "맞춤 도구 모음",
          "HTML 인터페이스"
        ],
        "heading": "반복 작업을 위한 도구 만들기",
        "rows": [
          [
            "rb",
            "모델 조작하기",
            "모델, 개체, 재질 및 구성 요소에 접근합니다."
          ],
          [
            "UI",
            "인터페이스 만들기",
            "메뉴, 도구 모음, HTML 대화상자 및 트레이."
          ],
          [
            "⚙",
            "확장 기능 불러오기",
            "Ruby 확장 기능을 불러오고 동작을 개별적으로 확인합니다."
          ]
        ],
        "footer": "개발 중 · SketchUp API 지원은 아직 일부에 한정됩니다"
      }
    },
    "enlargeLabel": "확대: "
  },
  "zh-Hant": {
    "screenshots": [
      {
        "src": "assets/SmallHouse.png",
        "title": "陰影效果展示",
        "alt": "ModraUp 實機擷取畫面：小屋模型與地面陰影",
        "description": "透過小屋模型與地面投影，展示建築量體的陰影效果。"
      },
      {
        "src": "assets/Add3DText.png",
        "title": "腳本建立 3D 文字",
        "alt": "ModraUp 實機擷取畫面：Ruby 腳本建立 ModraUp 立體文字",
        "description": "透過 Ruby 主控台建立 ModraUp 立體文字，展示腳本與幾何生成。"
      },
      {
        "src": "assets/Secion.png",
        "title": "剖切功能展示",
        "alt": "ModraUp 實機擷取畫面：廚房模型與多個剖切平面",
        "description": "使用多個剖切平面查看廚房模型的內部結構與構造細節。"
      },
      {
        "src": "assets/BigTerrain.png",
        "title": "大型模型測試 · 地形",
        "alt": "ModraUp 實機擷取畫面：地形大型模型與效能資訊",
        "description": "地形大型模型的操作測試擷取畫面，保留視埠中的效能資訊。"
      },
      {
        "src": "assets/BigModel-1.png",
        "title": "商業建築 · 近景",
        "alt": "ModraUp 實機擷取畫面：室外商業建築大型模型的近景視角",
        "description": "室外商業建築大型模型測試，近景展示建築立面、材質與廣場細節。"
      },
      {
        "src": "assets/BigModel-2.png",
        "title": "商業建築 · 俯視",
        "alt": "ModraUp 實機擷取畫面：室外商業建築大型模型的俯視視角",
        "description": "同一商業建築大型模型的俯視測試畫面，展示建築群、屋頂與場地配置。"
      }
    ],
    "features": {
      "modeling": {
        "number": "01 / 建模",
        "title": [
          "畫出輪廓，",
          "推拉成形。"
        ],
        "description": "從直線、矩形和圓開始，用推拉賦予平面體積。捕捉端點、中點與交點，配合軸向鎖定和數值輸入，讓直覺與精度一起工作。",
        "tags": [
          "繪圖工具",
          "推拉 / 偏移",
          "移動 / 旋轉 / 縮放",
          "路徑放樣"
        ],
        "heading": "把想法變成幾何",
        "rows": [
          [
            "R",
            "從輪廓開始",
            "直線、矩形、圓、多邊形與圓弧。"
          ],
          [
            "P",
            "建立體積",
            "沿面法向推拉，支援定距與重複操作。"
          ],
          [
            "M",
            "調整到位",
            "移動、旋轉、縮放，複製與陣列。"
          ]
        ],
        "footer": "推斷捕捉 · 軸向鎖定 · 數值輸入"
      },
      "organize": {
        "number": "02 / 組織",
        "title": [
          "把複雜模型，",
          "整理得清清楚楚。"
        ],
        "description": "用群組隔離幾何，用元件重用定義。按兩下進入巢狀階層，集中編輯目前內容；群組獨立修改，元件共享變更，讓重複設計更容易維護。",
        "tags": [
          "巢狀編輯",
          "元件重用",
          "元件瀏覽",
          "複製與貼上"
        ],
        "heading": "讓每一部分各就其位",
        "rows": [
          [
            "G",
            "整理幾何",
            "建立群組，整體移動、旋轉或縮放。"
          ],
          [
            "C",
            "重用元件",
            "相同定義的多個實例共享編輯結果。"
          ],
          [
            "↳",
            "進入階層",
            "按兩下進入，Esc 返回上一層編輯環境。"
          ]
        ],
        "footer": "群組隔離 · 定義重用 · 階層編輯"
      },
      "appearance": {
        "number": "03 / 表達",
        "title": [
          "給空間，",
          "你自己的表達。"
        ],
        "description": "套用顏色與紋理，調整邊線和顯示樣式，設定時間與太陽陰影。用場景儲存觀察狀態，用剖切查看內部空間，輔以文字標註與 3D 文字。",
        "tags": [
          "材質與紋理",
          "邊線與樣式",
          "太陽陰影",
          "剖切與文字"
        ],
        "heading": "從幾何到空間表達",
        "rows": [
          [
            "色",
            "設定材質",
            "顏色、紋理、不透明度與視埠取樣。"
          ],
          [
            "光",
            "觀察陰影",
            "調整日期與時間，觀察太陽投影。"
          ],
          [
            "剖",
            "看清內部",
            "剖切裁切與填滿，原生格式保留設定。"
          ]
        ],
        "footer": "場景視圖 · 剖切平面 · 文字註解"
      },
      "extend": {
        "number": "04 / 擴充功能",
        "title": [
          "讓你的工具，",
          "融入工作流程。"
        ],
        "description": "透過 Ruby API 建立與修改模型，使用主控台探索自動化，利用工具列和 HTML 介面建構擴充功能。API 持續完善，既有外掛的個別相容性需要驗證。",
        "tags": [
          "Ruby 主控台",
          "同名 API",
          "工具列擴充功能",
          "HTML 外掛介面"
        ],
        "heading": "為重複工作加入自己的工具",
        "rows": [
          [
            "rb",
            "操作模型",
            "存取模型、實體、材質與元件。"
          ],
          [
            "UI",
            "建構介面",
            "選單、工具列、HTML 對話方塊與面板。"
          ],
          [
            "⚙",
            "擴充功能載入",
            "載入 Ruby 擴充功能，逐項驗證外掛行為。"
          ]
        ],
        "footer": "開發中 · 尚未完整涵蓋 SketchUp API"
      }
    },
    "enlargeLabel": "放大查看："
  }
};
