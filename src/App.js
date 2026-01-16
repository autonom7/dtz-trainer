import React, { useState } from "react";

/**
 * ============================================================================
 * LESEN TEIL 1: Kataloge, Register, Verzeichnisse verstehen
 * ============================================================================
 */
const lesenTeil1Items = [
  {
    id: "rathaus_1",
    contextTitle: "Rathaus Ihrer Stadt",
    board: [
      {
        label: "EG",
        items: [
          "Bürgeramt: Ausweise, Anmeldung, Meldebescheinigungen",
          "Fundbüro",
        ],
      },
      {
        label: "1. OG",
        items: ["Jugendamt: Kita, Erziehungsberatung"],
      },
      {
        label: "2. OG",
        items: ["Sozialamt: Wohngeld, Hilfe im Alltag"],
      },
    ],
    situation: "Sie brauchen einen neuen Personalausweis.",
    options: ["EG", "1. OG", "2. OG"],
    correctIndex: 0,
  },
  {
    id: "rathaus_2",
    contextTitle: "Rathaus Ihrer Stadt",
    board: [
      {
        label: "EG",
        items: [
          "Bürgeramt: Ausweise, Anmeldung, Meldebescheinigungen",
          "Fundbüro",
        ],
      },
      {
        label: "1. OG",
        items: ["Jugendamt: Kita, Erziehungsberatung"],
      },
      {
        label: "2. OG",
        items: ["Sozialamt: Wohngeld, Hilfe im Alltag"],
      },
    ],
    situation: "Sie möchten Wohngeld beantragen.",
    options: ["EG", "1. OG", "2. OG"],
    correctIndex: 2,
  },
  {
    id: "rathaus_3",
    contextTitle: "Rathaus Ihrer Stadt",
    board: [
      {
        label: "EG",
        items: [
          "Bürgeramt: Ausweise, Anmeldung, Meldebescheinigungen",
          "Fundbüro",
        ],
      },
      {
        label: "1. OG",
        items: ["Jugendamt: Kita, Erziehungsberatung"],
      },
      {
        label: "2. OG",
        items: ["Sozialamt: Wohngeld, Hilfe im Alltag"],
      },
    ],
    situation: "Sie haben Ihre Geldbörse verloren.",
    options: ["EG", "1. OG", "2. OG"],
    correctIndex: 0,
  },
  {
    id: "krankenhaus_1",
    contextTitle: "Städtisches Klinikum - Gebäudeplan",
    board: [
      {
        label: "EG",
        items: ["Information", "Notaufnahme"],
      },
      {
        label: "1. OG",
        items: ["Röntgen", "Labor"],
      },
      {
        label: "2. OG",
        items: ["Gynäkologie", "Kinderstation"],
      },
    ],
    situation: "Ihr Kind ist krank. Sie suchen die Kinderstation.",
    options: ["EG", "1. OG", "2. OG"],
    correctIndex: 2,
  },
  {
    id: "bibliothek_1",
    contextTitle: "Stadtbibliothek - Etagenplan",
    board: [
      {
        label: "EG",
        items: [
          "Information",
          "Rückgabeautomat",
          "Zeitungen und Zeitschriften",
        ],
      },
      {
        label: "1. OG",
        items: ["Kinder- und Jugendbücher", "Spiele"],
      },
      {
        label: "2. OG",
        items: ["Sachbücher, Lernen & Beruf", "Computerarbeitsplätze"],
      },
    ],
    situation:
      "Ihre Tochter ist 7 Jahre alt. Sie suchen ein Kinderbuch für sie.",
    options: ["EG", "1. OG", "2. OG"],
    correctIndex: 1,
  },
];

/**
 * ============================================================================
 * LESEN TEIL 2: Anzeigen verstehen (Zuordnung mit X-Option)
 * ============================================================================
 */
const lesenTeil2Items = [
  {
    id: "jobsearch_1",
    situation:
      "Sie möchten in Ihrer Freizeit Kinder betreuen und suchen nach einer Möglichkeit.",
    correctAnswer: "b",
    explanation:
      "Der Babysitterkurs ist für Menschen, die Babys und Kleinkinder betreuen möchten.",
  },
  {
    id: "jobsearch_2",
    situation:
      "Sie haben einen Hauptschulabschluss und möchten das Abitur nachholen.",
    correctAnswer: "g",
    explanation:
      "Die VHS bietet Kurse an, um Schulabschlüsse nachzuholen (Fachhochschulreife, Realschulabschluss, Abitur).",
  },
  {
    id: "jobsearch_3",
    situation: "Sie suchen einen Nebenjob am Wochenende für Schüler.",
    correctAnswer: "d",
    explanation:
      "Das Angebot Ferien und Arbeit bietet einen Nebenjob für Juli und August.",
  },
  {
    id: "jobsearch_4",
    situation:
      "Sie möchten Fahrlehrerin werden und haben schon einen Führerschein.",
    correctAnswer: "a",
    explanation:
      "Der Kurs bereitet Sie auf die Ausbildung zur Fahrlehrerin vor. Voraussetzung: Führerschein, Mindestalter 21 Jahre.",
  },
  {
    id: "jobsearch_5",
    situation:
      "Sie interessieren sich für klassische Musik und möchten Konzerttickets kaufen.",
    correctAnswer: "x",
    explanation:
      "Keine der Anzeigen bietet Konzerttickets. Die richtige Antwort ist X (keine Loesung).",
  },
];

const lesenTeil2Ads = [
  {
    id: "a",
    title: "Fahrlehrerin für Klasse BE PKW",
    text: "Ausbildung 8 Monate. Voraussetzung: Führerschein, Mindestalter 21, abgeschlossene Berufsausbildung oder Abitur. Fahrschule Theiss.",
  },
  {
    id: "b",
    title: "Babysitterkurs",
    text: "Für Jugendliche und Erwachsene, die Babys und Kleinkinder betreuen möchten. 5 Treffen, montags 17:00-18:30 Uhr. Leitung: Frau Watt, Kinderkrankenschwester.",
  },
  {
    id: "c",
    title: "Webentwicklerin - Fernunterricht",
    text: "Ausbildung zur Webentwicklerin und Programmiererin. 12 Monate, Fernunterricht. Voraussetzung: Realschulabschluss. FernlernAkademie.",
  },
  {
    id: "d",
    title: "Ferien und Arbeit",
    text: "Verdiene 400 Euro und mehr pro Monat in den Sommerferien (Juli/August). Keine Vorkenntnisse noetig. Kontakt: Frau Sabine Klotz.",
  },
  {
    id: "e",
    title: "Erzieherin in Teilzeit gesucht",
    text: "Waldkindergarten Wuppertal sucht eine Erzieherin mit Berufserfahrung. Teilzeitstelle, Festanstellung, Fort- und Weiterbildungsmöglichkeiten.",
  },
  {
    id: "f",
    title: "Umzugsbetrieb - Helfer gesucht",
    text: "Suche Umzugshelfer, Möbelmonteure, Tischler. Projekt-, Büro- und Privatumzüge bundesweit. Bochum.",
  },
  {
    id: "g",
    title: "VHS Dortmund - Schulabschlüsse nachholen",
    text: "Fachhochschulreife, Real- oder Hauptschulabschluss. Beginn ab November, Dauer 18 Monate. Nachmittags oder abends. Kosten: 55 Euro pro Monat.",
  },
  {
    id: "h",
    title: "Autoverkäufer gesucht",
    text: "Autoshow Maler AG sucht Autoverkäufer. Abgeschlossene Berufslehre, Führerschein und gutes Kundenverhalten erforderlich. Gutes Gehalt, sicherer Arbeitsplatz.",
  },
];

/**
 * ============================================================================
 * LESEN TEIL 3: Pressetexte + Richtig/Falsch + Multiple Choice
 * ============================================================================
 */
const lesenTeil3Items = [
  {
    id: "text_1",
    title: "Wiedereröffnung des Bürgerbüros",
    text: "Im vergangenen Jahr wurde das Bürgerbüro der Stadt Bergheim umgebaut. Kommende Woche wird es wiedereröffnet. Ausweise und Pässe können dann wieder im Bürgerbüro beantragt und abgeholt werden. Aber es gibt auch einige Veränderungen: Man kann im Bürgerbüro keine Autos mehr an- oder abmelden. Dafür müssen die Bürger dann zum Straßenverkehrsamt der Nachbarstadt fahren. Auch die Beantragung von Führerscheinen ist nur noch dort möglich. Neu ist aber auch, dass man in Zukunft im Bürgerbüro auch Hilfe bei Rechtsfragen bekommt. Man kann sich kostenlos von einem Rechtsanwalt beraten lassen, zum Beispiel bei Problemen mit dem Arbeits- oder Mietvertrag.",
    statement: "Das Bürgerbüro in Bergheim wird nächstes Jahr geschlossen.",
    statementCorrect: false,
    mcQuestion: "Was kann man im Bürgerbüro machen?",
    mcOptions: [
      "Ein Auto anmelden.",
      "Einen Führerschein beantragen.",
      "Sich von einem Anwalt helfen lassen.",
    ],
    mcCorrectIndex: 2,
    explanation:
      "Das Bürgerbüro wird kommende Woche wiedereröffnet (nicht nächstes Jahr geschlossen). Man kann sich dort kostenlos von einem Rechtsanwalt beraten lassen, nicht aber ein Auto anmelden oder einen Führerschein beantragen.",
  },
  {
    id: "text_2",
    title: "Kindergarten Pusteblume - Gebührenerhöhung",
    text: "Liebe Eltern, sicherlich haben Sie schon gehört, dass wir einige Spielgeräte im Innenhof dringend reparieren müssen, weil sie kaputt sind. Auch der Essensraum muss renoviert werden. Außerdem wollen wir eine neue Rutsche bauen. Leider gibt es im kommenden Jahr aber weniger Geld von der Stadt für unseren Kindergarten. Deshalb müssen wir alle Beiträge ab dem 1. Januar erhöhen, und zwar pro Kind um 10 Euro auf monatlich 69 Euro. Wir bitten Sie um Ihr Verständnis. Leider ist das die einzige Möglichkeit, Ihren Kindern auch in Zukunft eine gute Betreuung anbieten zu können.",
    statement:
      "Nächstes Jahr müssen Eltern mehr für den Kindergarten bezahlen.",
    statementCorrect: true,
    mcQuestion: "Was muss der Kindergarten machen?",
    mcOptions: [
      "Einen neuen Spielplatz bauen.",
      "Geld an die Stadt zahlen.",
      "Renovieren.",
    ],
    mcCorrectIndex: 2,
    explanation:
      "Die Elternbeiträge erhöhen sich ab 1. Januar um 10 Euro pro Kind. Der Kindergarten muss Spielgeräte reparieren, den Essensraum renovieren und eine neue Rutsche bauen.",
  },
  {
    id: "text_3",
    title: "Sprachkurs-Einstufung",
    text: "Lieber Herr Khan, vielen Dank für Ihr Interesse an einem Sprachkurs bei Superlanguage. Wir können Ihnen heute die Ergebnisse Ihres Einstufungstests für Deutsch mitteilen. Ihre Deutschkenntnisse liegen zwischen den Niveaus A2 und B1. Unsere Empfehlung ist, dass Sie sich für den Kurs A2.2. oder den Kurs B1.1. registrieren. Falls Sie sich unsicher sind, können wir Sie gerne beraten. Sie haben in Ihrem Fragebogen angegeben, dass Sie sich besonders für den Kurs Deutsch für den Beruf interessieren. Bitte beachten Sie, dass wir diesen Kurs erst ab Niveau B2 anbieten. Wenn Sie Einzelunterricht buchen, können Sie die Themen jedoch individuell mit Ihrem Lehrer oder Ihrer Lehrerin absprechen.",
    statement: "Herr Khan hat sich für einen Deutschkurs angemeldet.",
    statementCorrect: false,
    mcQuestion: "Herr Khan:",
    mcOptions: [
      "hat einen Test zur Einstufung gemacht.",
      "kann an Deutsch für den Beruf teilnehmen.",
      "spricht Deutsch auf dem Niveau B2.",
    ],
    mcCorrectIndex: 0,
    explanation:
      "Herr Khan hat einen Einstufungstest gemacht (nicht sich einfach angemeldet). Der Kurs Deutsch für den Beruf wird erst ab B2 angeboten, aber Herr Khans Niveau liegt zwischen A2 und B1.",
  },
];

/**
 * ============================================================================
 * LESEN TEIL 4: Kurzmeldungen + 3x Richtig/Falsch
 * ============================================================================
 */
const lesenTeil4Items = [
  {
    id: "news_1",
    title: "Busfahrer gesucht",
    text: "Die Stadtverkehrsbetriebe suchen ab sofort Busfahrer für verschiedene Linien. Voraussetzungen: Führerschein Klasse D, deutsches Sprachniveau B1 und gutes Englisch. Die Arbeitszeit ist flexibel. Der Arbeitgeber bietet eine gute Ausbildung und ein angenehmes Betriebsklima. Interessierte können sich per E-Mail bewerben: info@stadtverkehr.de",
    statements: [
      {
        id: "37a",
        text: "Die Stadtverkehrsbetriebe stellen nur Busfahrer mit Englischkenntnissen ein.",
        correct: true,
        explanation:
          "In der Anzeige steht, dass gutes Englisch Voraussetzung ist.",
      },
      {
        id: "37b",
        text: "Die Arbeitszeit ist nicht flexibel.",
        correct: false,
        explanation:
          "In der Anzeige steht ausdrücklich, dass die Arbeitszeit flexibel ist.",
      },
      {
        id: "37c",
        text: "Für die Stelle ist ein Führerschein Klasse B erforderlich.",
        correct: false,
        explanation: "Gefordert wird Führerschein Klasse D, nicht Klasse B.",
      },
    ],
  },
  {
    id: "news_2",
    title: "Neue Öffnungszeiten der Stadtbibliothek",
    text: "Die Stadtbibliothek hat ab Januar neue Öffnungszeiten. Montag bis Freitag: 9:00 bis 18:00 Uhr. Samstag: 10:00 bis 14:00 Uhr. Sonntag geschlossen. Die Online-Ausleihe ist jetzt auch am Sonntag möglich. Weitere Informationen unter www.stadtbibliothek.de oder per Telefon unter 0234 / 567890.",
    statements: [
      {
        id: "38a",
        text: "Die Stadtbibliothek ist sonntags von 10:00 bis 14:00 Uhr offen.",
        correct: false,
        explanation:
          "Diese Zeiten gelten für Samstag. Sonntags ist die Bibliothek geschlossen.",
      },
      {
        id: "38b",
        text: "Man kann sonntags Bücher online ausleihen.",
        correct: true,
        explanation:
          "Im Text steht, dass die Online-Ausleihe auch am Sonntag möglich ist.",
      },
      {
        id: "38c",
        text: "Die neuen Öffnungszeiten beginnen im Februar.",
        correct: false,
        explanation:
          "Im Text steht, dass die neuen Öffnungszeiten ab Januar gelten.",
      },
    ],
  },
  {
    id: "news_3",
    title: "Sprachkurs für Eltern",
    text: "Das Familienzentrum Nordstadt bietet ab März einen kostenlosen Deutschkurs für Eltern von Kindergartenkindern an. Der Kurs findet montags und freitags von 9:00 bis 11:00 Uhr im Familienzentrum statt. Kinderbetreuung während des Kurses ist vorhanden. Die Teilnehmer erhalten ein Zertifikat nach Kursabschluss. Anmeldung: telefon@familienzentrum.de oder 0234 / 123456.",
    statements: [
      {
        id: "39a",
        text: "Der Kurs kostet 50 Euro pro Monat.",
        correct: false,
        explanation:
          "Der Kurs wird als kostenlos beschrieben. Es wird kein Preis genannt.",
      },
      {
        id: "39b",
        text: "Der Kurs findet zweimal pro Woche statt.",
        correct: true,
        explanation:
          "Der Kurs findet montags und freitags statt, also zweimal pro Woche.",
      },
      {
        id: "39c",
        text: "Es gibt keine Kinderbetreuung während des Kurses.",
        correct: false,
        explanation: "Im Text steht, dass Kinderbetreuung vorhanden ist.",
      },
    ],
  },
];

const optionLetters = ["a", "b", "c"];

/**
 * ============================================================================
 * INSTRUKTIONEN für jeden Leseteil (angepasst)
 * ============================================================================
 */
const instructions = {
  lesen1:
    "Sie sehen Wegweiser aus verschiedenen Gebäuden (zum Beispiel Rathaus, Krankenhaus, Bibliothek). Lesen Sie die Aufgaben und den Wegweiser. In welches Stockwerk oder zu welchem Bereich (a, b oder c) gehen Sie?",
  lesen2:
    "Sie lesen kurze Situationen und dazu passende Anzeigen a-h. Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie X.",
  lesen3:
    "Sie lesen drei kurze Texte (zum Beispiel Mitteilungen oder Nachrichten). Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie zuerst, ob die Aussage richtig oder falsch ist, und wählen Sie dann die passende Antwort (a, b oder c).",
  lesen4:
    "Sie lesen kurze Mitteilungen oder Informationen, zum Beispiel aus Medien oder vom Familienzentrum. Zu jedem Text gibt es drei Aussagen. Entscheiden Sie bei jeder Aussage, ob sie richtig oder falsch ist.",
  lesen5:
    "Sie lesen einen zusammenhängenden Text mit Lücken. Für jede Lücke gibt es drei Lösungsmöglichkeiten (a, b oder c). Wählen Sie die passende Lösung und setzen Sie den Text richtig fort.",
};

/**
 * ============================================================================
 * LESEN TEIL 1 TRAINER
 * ============================================================================
 */
function LesenTeil1Trainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentItem = lesenTeil1Items[currentIndex];

  const handleOptionClick = (index) => {
    if (answered) return;
    setSelectedIndex(index);
    const correct = index === currentItem.correctIndex;
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < lesenTeil1Items.length) {
      setCurrentIndex(nextIndex);
      setSelectedIndex(null);
      setIsCorrect(null);
      setAnswered(false);
    } else {
      setCurrentIndex(0);
      setSelectedIndex(null);
      setIsCorrect(null);
      setAnswered(false);
    }
  };

  const isLastItem = currentIndex === lesenTeil1Items.length - 1;

  return (
    <div>
      <div style={styles.instructionBox}>
        <p>{instructions.lesen1}</p>
      </div>

      <div style={styles.progress}>
        Aufgabe {currentIndex + 1} von {lesenTeil1Items.length}
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Situation</h2>
        <p style={styles.situationText}>{currentItem.situation}</p>
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>{currentItem.contextTitle}</h2>
        <div style={styles.board}>
          {currentItem.board.map((row) => (
            <div key={row.label} style={styles.boardRow}>
              <div style={styles.boardLabel}>{row.label}</div>
              <div style={styles.boardContent}>
                {row.items.map((text, idx) => (
                  <div key={idx} style={styles.boardItem}>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Ihre Antwort</h2>
        <div style={styles.optionsRow}>
          {currentItem.options.map((opt, index) => {
            const isSelected = selectedIndex === index;
            const isRightOption = index === currentItem.correctIndex;

            let backgroundColor = "#f0f0f0";
            if (answered && isSelected && isCorrect)
              backgroundColor = "#c8f7c5";
            if (answered && isSelected && !isCorrect)
              backgroundColor = "#f7c5c5";
            if (answered && !isSelected && isRightOption)
              backgroundColor = "#e2f7c5";

            return (
              <button
                key={index}
                style={{
                  ...styles.optionButton,
                  backgroundColor,
                }}
                onClick={() => handleOptionClick(index)}
              >
                <span style={styles.optionLetter}>{optionLetters[index]}.</span>
                <span style={{ marginLeft: "5px" }}>{opt}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div style={styles.feedback}>
            {isCorrect ? (
              <span style={{ color: "green" }}>✓ Richtig!</span>
            ) : (
              <span style={{ color: "darkred" }}>
                ✗ Nicht ganz. Richtig ist{" "}
                <strong>
                  {optionLetters[currentItem.correctIndex]}){" "}
                  {currentItem.options[currentItem.correctIndex]}
                </strong>
                .
              </span>
            )}
          </div>
        )}

        <div style={styles.nextRow}>
          <button
            style={styles.nextButton}
            onClick={handleNext}
            disabled={!answered}
          >
            {isLastItem ? "Noch einmal von vorn" : "Nächste Aufgabe"}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * LESEN TEIL 2 TRAINER (mit X im Grid, weißer Hintergrund)
 * ============================================================================
 */
function LesenTeil2Trainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentItem = lesenTeil2Items[currentIndex];
  const hasNoSolution = currentItem.correctAnswer === "x";

  const handleAdClick = (adId) => {
    if (answered) return;
    setSelectedAd(adId);
    const correct = adId === currentItem.correctAnswer;
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleNoSolutionClick = () => {
    if (answered) return;
    setSelectedAd("x");
    const correct = currentItem.correctAnswer === "x";
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < lesenTeil2Items.length) {
      setCurrentIndex(nextIndex);
      setSelectedAd(null);
      setIsCorrect(null);
      setAnswered(false);
    } else {
      setCurrentIndex(0);
      setSelectedAd(null);
      setIsCorrect(null);
      setAnswered(false);
    }
  };

  const isLastItem = currentIndex === lesenTeil2Items.length - 1;
  const correctAd = lesenTeil2Ads.find(
    (ad) => ad.id === currentItem.correctAnswer
  );

  return (
    <div>
      <div style={styles.instructionBox}>
        <p>{instructions.lesen2}</p>
      </div>

      <div style={styles.progress}>
        Aufgabe {currentIndex + 1} von {lesenTeil2Items.length}
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Situation</h2>
        <p style={styles.situationText}>{currentItem.situation}</p>
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Anzeigen</h2>
        <div style={styles.adsGrid}>
          {lesenTeil2Ads.map((ad) => {
            const isSelected = selectedAd === ad.id;
            const isRightAd = ad.id === currentItem.correctAnswer;

            let backgroundColor = "#ffffff";
            let border = "1px solid #ccc";

            if (answered && isSelected && isCorrect) {
              backgroundColor = "#c8f7c5";
              border = "2px solid green";
            }
            if (answered && isSelected && !isCorrect) {
              backgroundColor = "#f7c5c5";
              border = "2px solid red";
            }
            if (answered && !isSelected && isRightAd) {
              backgroundColor = "#e2f7c5";
              border = "2px solid green";
            }

            return (
              <button
                key={ad.id}
                style={{
                  ...styles.adButton,
                  backgroundColor,
                  border,
                }}
                onClick={() => handleAdClick(ad.id)}
              >
                <div style={styles.adId}>{ad.id})</div>
                <div style={styles.adTitle}>{ad.title}</div>
                <div style={styles.adText}>{ad.text}</div>
              </button>
            );
          })}

          {/* X Button */}
          <button
            style={{
              ...styles.adButton,
              backgroundColor:
                answered && selectedAd === "x" && isCorrect
                  ? "#c8f7c5"
                  : answered && selectedAd === "x" && !isCorrect
                  ? "#f7c5c5"
                  : answered && hasNoSolution
                  ? "#e2f7c5"
                  : "#ffffff",
              border:
                answered && selectedAd === "x" && isCorrect
                  ? "2px solid green"
                  : answered && selectedAd === "x" && !isCorrect
                  ? "2px solid red"
                  : answered && hasNoSolution
                  ? "2px solid green"
                  : "1px solid #ccc",
            }}
            onClick={handleNoSolutionClick}
          >
            <div style={styles.adId}>X</div>
            <div style={styles.adTitle}>Keine Lösung</div>
            <div style={styles.adText}>&nbsp;</div>
          </button>
        </div>
      </div>

      {answered && (
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Feedback</h2>
          {isCorrect ? (
            <div style={{ color: "green" }}>
              <p>✓ Richtig!</p>
              <p style={styles.explanation}>{currentItem.explanation}</p>
            </div>
          ) : (
            <div style={{ color: "darkred" }}>
              <p>✗ Nicht ganz. Die richtige Antwort ist:</p>
              {hasNoSolution ? (
                <div style={styles.correctAdBox}>
                  <strong>X</strong> - Keine der Anzeigen passt zu dieser
                  Situation.
                </div>
              ) : (
                <div style={styles.correctAdBox}>
                  <strong>{correctAd.id})</strong> {correctAd.title}
                </div>
              )}
              <p style={styles.explanation}>{currentItem.explanation}</p>
            </div>
          )}

          <div style={styles.nextRow}>
            <button style={styles.nextButton} onClick={handleNext}>
              {isLastItem ? "Noch einmal von vorn" : "Nächste Aufgabe"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * ============================================================================
 * LESEN TEIL 3 TRAINER
 * ============================================================================
 */
function LesenTeil3Trainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [statementAnswer, setStatementAnswer] = useState(null);
  const [mcAnswer, setMcAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentItem = lesenTeil3Items[currentIndex];
  const statementCorrect = statementAnswer === currentItem.statementCorrect;
  const mcCorrect = mcAnswer === currentItem.mcCorrectIndex;
  const bothCorrect = statementCorrect && mcCorrect;

  const handleStatementClick = (value) => {
    if (statementAnswer !== null && !answered) {
      setStatementAnswer(value);
      return;
    }
    if (!answered) setStatementAnswer(value);
  };

  const handleMcClick = (index) => {
    if (mcAnswer !== null && !answered) {
      setMcAnswer(index);
      return;
    }
    if (!answered) setMcAnswer(index);
  };

  const handleSubmit = () => {
    if (statementAnswer === null || mcAnswer === null) {
      alert("Bitte beantworten Sie beide Aufgaben!");
      return;
    }
    setIsCorrect(bothCorrect);
    setAnswered(true);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < lesenTeil3Items.length) {
      setCurrentIndex(nextIndex);
      setStatementAnswer(null);
      setMcAnswer(null);
      setIsCorrect(null);
      setAnswered(false);
    } else {
      setCurrentIndex(0);
      setStatementAnswer(null);
      setMcAnswer(null);
      setIsCorrect(null);
      setAnswered(false);
    }
  };

  const isLastItem = currentIndex === lesenTeil3Items.length - 1;

  return (
    <div>
      <div style={styles.instructionBox}>
        <p>{instructions.lesen3}</p>
      </div>

      <div style={styles.progress}>
        Text {currentIndex + 1} von {lesenTeil3Items.length}
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>{currentItem.title}</h2>
        <p style={styles.textContent}>{currentItem.text}</p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Aufgabe 1: Richtig oder Falsch?</h3>
        <p style={styles.statementText}>{currentItem.statement}</p>

        <div style={styles.rfRow}>
          <button
            style={{
              ...styles.rfButton,
              backgroundColor:
                statementAnswer === true && answered && statementCorrect
                  ? "#c8f7c5"
                  : statementAnswer === true && answered && !statementCorrect
                  ? "#f7c5c5"
                  : statementAnswer === true
                  ? "#ddd"
                  : "#f0f0f0",
            }}
            onClick={() => handleStatementClick(true)}
            disabled={answered}
          >
            Richtig
          </button>
          <button
            style={{
              ...styles.rfButton,
              backgroundColor:
                statementAnswer === false && answered && statementCorrect
                  ? "#c8f7c5"
                  : statementAnswer === false && answered && !statementCorrect
                  ? "#f7c5c5"
                  : statementAnswer === false
                  ? "#ddd"
                  : "#f0f0f0",
            }}
            onClick={() => handleStatementClick(false)}
            disabled={answered}
          >
            Falsch
          </button>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Aufgabe 2: Multiple Choice</h3>
        <p style={styles.mcQuestionText}>{currentItem.mcQuestion}</p>

        <div style={styles.mcButtonsRow}>
          {currentItem.mcOptions.map((option, index) => {
            const isSelected = mcAnswer === index;
            const isRightOption = index === currentItem.mcCorrectIndex;

            let backgroundColor = "#f0f0f0";
            if (isSelected && answered && mcCorrect)
              backgroundColor = "#c8f7c5";
            if (isSelected && answered && !mcCorrect)
              backgroundColor = "#f7c5c5";
            if (!isSelected && isRightOption && answered)
              backgroundColor = "#e2f7c5";

            return (
              <button
                key={index}
                style={{
                  ...styles.mcButton,
                  backgroundColor,
                }}
                onClick={() => handleMcClick(index)}
                disabled={answered}
              >
                <span style={styles.optionLetter}>{optionLetters[index]})</span>{" "}
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div style={styles.card}>
        {!answered && (
          <div style={styles.nextRow}>
            <button style={styles.nextButton} onClick={handleSubmit}>
              Antworten prüfen
            </button>
          </div>
        )}

        {answered && (
          <div>
            <h3 style={styles.sectionTitle}>Feedback</h3>
            {bothCorrect ? (
              <div style={{ color: "green" }}>
                <p>✓ Sehr gut! Beide Aufgaben richtig!</p>
              </div>
            ) : (
              <div style={{ color: "darkred" }}>
                <p>✗ Nicht ganz korrekt:</p>
                {!statementCorrect && (
                  <div style={styles.feedbackBox}>
                    <strong>Aufgabe 1:</strong> Die Aussage ist{" "}
                    <strong>
                      {currentItem.statementCorrect ? "richtig" : "falsch"}
                    </strong>
                    .
                  </div>
                )}
                {!mcCorrect && (
                  <div style={styles.feedbackBox}>
                    <strong>Aufgabe 2:</strong> Die richtige Antwort ist{" "}
                    <strong>
                      {optionLetters[currentItem.mcCorrectIndex]})
                      {currentItem.mcOptions[currentItem.mcCorrectIndex]}
                    </strong>
                    .
                  </div>
                )}
              </div>
            )}

            <p style={styles.explanation}>{currentItem.explanation}</p>

            <div style={styles.nextRow}>
              <button style={styles.nextButton} onClick={handleNext}>
                {isLastItem ? "Noch einmal von vorn" : "Nächster Text"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * LESEN TEIL 4 TRAINER
 * ============================================================================
 */
function LesenTeil4Trainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([null, null, null]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentItem = lesenTeil4Items[currentIndex];

  const handleStatementClick = (statementIndex, value) => {
    if (answered) return;
    const newAnswers = [...answers];
    newAnswers[statementIndex] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.some((ans) => ans === null)) {
      alert("Bitte beantworten Sie alle drei Aufgaben!");
      return;
    }

    const allCorrect = answers.every(
      (ans, idx) => ans === currentItem.statements[idx].correct
    );
    setIsCorrect(allCorrect);
    setAnswered(true);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < lesenTeil4Items.length) {
      setCurrentIndex(nextIndex);
      setAnswers([null, null, null]);
      setIsCorrect(null);
      setAnswered(false);
    } else {
      setCurrentIndex(0);
      setAnswers([null, null, null]);
      setIsCorrect(null);
      setAnswered(false);
    }
  };

  const isLastItem = currentIndex === lesenTeil4Items.length - 1;

  return (
    <div>
      <div style={styles.instructionBox}>
        <p>{instructions.lesen4}</p>
      </div>

      <div style={styles.progress}>
        Text {currentIndex + 1} von {lesenTeil4Items.length}
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>{currentItem.title}</h2>
        <p style={styles.textContent}>{currentItem.text}</p>
      </div>

      {currentItem.statements.map((statement, idx) => (
        <div key={statement.id} style={styles.card}>
          <h3 style={styles.sectionTitle}>Aussage {idx + 1}</h3>
          <p style={styles.statementText}>{statement.text}</p>

          <div style={styles.rfRow}>
            <button
              style={{
                ...styles.rfButton,
                backgroundColor:
                  answers[idx] === true && answered && statement.correct
                    ? "#c8f7c5"
                    : answers[idx] === true && answered && !statement.correct
                    ? "#f7c5c5"
                    : answers[idx] === true
                    ? "#ddd"
                    : "#f0f0f0",
              }}
              onClick={() => handleStatementClick(idx, true)}
              disabled={answered}
            >
              Richtig
            </button>
            <button
              style={{
                ...styles.rfButton,
                backgroundColor:
                  answers[idx] === false && answered && statement.correct
                    ? "#c8f7c5"
                    : answers[idx] === false && answered && !statement.correct
                    ? "#f7c5c5"
                    : answers[idx] === false
                    ? "#ddd"
                    : "#f0f0f0",
              }}
              onClick={() => handleStatementClick(idx, false)}
              disabled={answered}
            >
              Falsch
            </button>
          </div>

          {answered && (
            <div style={styles.explanation}>{statement.explanation}</div>
          )}
        </div>
      ))}

      <div style={styles.card}>
        {!answered && (
          <div style={styles.nextRow}>
            <button style={styles.nextButton} onClick={handleSubmit}>
              Antworten prüfen
            </button>
          </div>
        )}

        {answered && (
          <div>
            <h3 style={styles.sectionTitle}>Feedback</h3>
            {isCorrect ? (
              <div style={{ color: "green" }}>
                <p>✓ Sehr gut! Alle Aussagen richtig bewertet!</p>
              </div>
            ) : (
              <div style={{ color: "darkred" }}>
                <p>
                  ✗ Nicht alle Aussagen sind korrekt. Siehe Erklärungen oben.
                </p>
              </div>
            )}

            <div style={styles.nextRow}>
              <button style={styles.nextButton} onClick={handleNext}>
                {isLastItem ? "Noch einmal von vorn" : "Nächster Text"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const lesenTeil5Items = [
  {
    title: "Text 1 - Sprachkurs",
    textParts: [
      "Das Familienzentrum ",
      " einen kostenlosen Deutschkurs für ",
      " an. Der ",
      " findet montags und ",
      " im Familienzentrum statt.",
    ],
    gaps: [
      {
        gapNumber: 1,
        options: ["bietet", "sucht", "möchte"],
        correctIndex: 0,
        explanation: "'bietet' passt in diesen Kontext.",
      },
      {
        gapNumber: 2,
        options: ["Eltern", "Arbeitgeber", "Lehrer"],
        correctIndex: 0,
        explanation: "'Eltern' ist die richtige Antwort.",
      },
      {
        gapNumber: 3,
        options: ["Kurs", "Tag", "Platz"],
        correctIndex: 0,
        explanation: "'Kurs' passt grammatikalisch.",
      },
      {
        gapNumber: 4,
        options: ["freitags", "morgens", "abends"],
        correctIndex: 0,
        explanation: "'freitags' ist korrekt.",
      },
    ],
  },
];

function LesenTeil5Trainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentItem = lesenTeil5Items[currentIndex];

  const handleGapClick = (gapNumber, optionIndex) => {
    if (answered) return;
    const newAnswers = { ...selectedAnswers };
    newAnswers[gapNumber] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const allAnswered = currentItem.gaps.every((gap) =>
      selectedAnswers.hasOwnProperty(gap.gapNumber)
    );
    if (!allAnswered) {
      alert("Bitte füllen Sie alle Lücken aus!");
      return;
    }
    const allCorrect = currentItem.gaps.every(
      (gap) => selectedAnswers[gap.gapNumber] === gap.correctIndex
    );
    setIsCorrect(allCorrect);
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < lesenTeil5Items.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setSelectedAnswers({});
    setIsCorrect(null);
    setAnswered(false);
  };

  return (
    <div>
      <div style={styles.instructionBox}>
        <p>{instructions.lesen5}</p>
      </div>
      <div style={styles.progress}>
        Text {currentIndex + 1} von {lesenTeil5Items.length}
      </div>
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>{currentItem.title}</h2>
        <div style={styles.textWithGaps}>
          {currentItem.textParts.map((part, idx) => (
            <span key={idx}>
              <span>{part}</span>
              {idx < currentItem.gaps.length && (
                <GapComponent
                  gap={currentItem.gaps[idx]}
                  selectedIndex={
                    selectedAnswers[currentItem.gaps[idx].gapNumber]
                  }
                  onSelect={(optionIndex) =>
                    handleGapClick(currentItem.gaps[idx].gapNumber, optionIndex)
                  }
                  answered={answered}
                  isCorrect={
                    answered &&
                    selectedAnswers[currentItem.gaps[idx].gapNumber] ===
                      currentItem.gaps[idx].correctIndex
                  }
                />
              )}
            </span>
          ))}
        </div>
      </div>
      <div style={styles.card}>
        {!answered && (
          <div style={styles.nextRow}>
            <button style={styles.nextButton} onClick={handleSubmit}>
              Antworten prüfen
            </button>
          </div>
        )}
        {answered && (
          <div>
            <h3 style={styles.sectionTitle}>Feedback</h3>
            {isCorrect ? (
              <div style={{ color: "green" }}>
                <p>✓ Sehr gut! Alle Lücken richtig gefüllt!</p>
              </div>
            ) : (
              <div style={{ color: "darkred" }}>
                <p>✗ Nicht alle Lücken sind richtig gefüllt.</p>
                {currentItem.gaps.map((gap, idx) => {
                  const userAnswer = selectedAnswers[gap.gapNumber];
                  if (userAnswer !== gap.correctIndex) {
                    return (
                      <div key={idx} style={styles.feedbackBox}>
                        <strong>Lücke {gap.gapNumber}:</strong> Richtige Antwort
                        ist{" "}
                        <strong>
                          {optionLetters[gap.correctIndex]})
                          {gap.options[gap.correctIndex]}
                        </strong>
                        . {gap.explanation}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
            <div style={styles.nextRow}>
              <button style={styles.nextButton} onClick={handleNext}>
                {currentIndex === lesenTeil5Items.length - 1
                  ? "Noch einmal von vorn"
                  : "Nächster Text"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GapComponent({ gap, selectedIndex, onSelect, answered, isCorrect }) {
  return (
    <div style={styles.gapContainer}>
      <div style={styles.gapNumber}>{gap.gapNumber}</div>
      <div style={styles.gapOptions}>
        {gap.options.map((option, idx) => {
          const isSelected = selectedIndex === idx;
          let backgroundColor = "#ffffff";
          let border = "1px solid #ccc";
          if (answered && isSelected && isCorrect) {
            backgroundColor = "#c8f7c5";
            border = "2px solid green";
          }
          if (answered && isSelected && !isCorrect) {
            backgroundColor = "#f7c5c5";
            border = "2px solid red";
          }
          if (answered && !isSelected && idx === gap.correctIndex) {
            backgroundColor = "#e2f7c5";
            border = "2px solid green";
          }
          return (
            <button
              key={idx}
              style={{
                ...styles.gapOption,
                backgroundColor,
                border,
                opacity: answered ? 1 : isSelected ? 0.8 : 0.6,
              }}
              onClick={() => onSelect(idx)}
              disabled={answered}
            >
              <span style={{ fontWeight: "bold" }}>{optionLetters[idx]}.</span>
              <span style={{ marginLeft: "4px" }}>{gap.options[idx]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * HAUPTAPP MIT REITERN
 * ============================================================================
 */
function App() {
  const [mode, setMode] = useState("lesen1");

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>DTZ-Training - Lesen</h1>
      <p style={styles.subtitle}>
        Übe alle Leseteile des Deutsch-Tests für Zuwanderer.
      </p>

      <div style={styles.tabBar}>
        <button
          style={{
            ...styles.tab,
            ...(mode === "lesen1" ? styles.tabActive : styles.tabInactive),
          }}
          onClick={() => setMode("lesen1")}
        >
          Lesen Teil 1
        </button>
        <button
          style={{
            ...styles.tab,
            ...(mode === "lesen2" ? styles.tabActive : styles.tabInactive),
          }}
          onClick={() => setMode("lesen2")}
        >
          Lesen Teil 2
        </button>
        <button
          style={{
            ...styles.tab,
            ...(mode === "lesen3" ? styles.tabActive : styles.tabInactive),
          }}
          onClick={() => setMode("lesen3")}
        >
          Lesen Teil 3
        </button>
        <button
          style={{
            ...styles.tab,
            ...(mode === "lesen4" ? styles.tabActive : styles.tabInactive),
          }}
          onClick={() => setMode("lesen4")}
        >
          Lesen Teil 4
        </button>
        <button
          style={{
            ...styles.tab,
            ...(mode === "lesen5" ? styles.tabActive : styles.tabInactive),
          }}
          onClick={() => setMode("lesen5")}
        >
          Lesen Teil 5
        </button>
      </div>

      {mode === "lesen1" && <LesenTeil1Trainer />}
      {mode === "lesen2" && <LesenTeil2Trainer />}
      {mode === "lesen3" && <LesenTeil3Trainer />}
      {mode === "lesen4" && <LesenTeil4Trainer />}
      {mode === "lesen5" && <LesenTeil5Trainer />}
    </div>
  );
}

/**
 * ============================================================================
 * STYLES
 * ============================================================================
 */
const styles = {
  app: {
    fontFamily: "sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "16px",
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "4px",
    color: "#1976d2",
  },
  subtitle: {
    marginTop: 0,
    marginBottom: "16px",
    color: "#666",
  },

  instructionBox: {
    backgroundColor: "#e3f2fd",
    border: "1px solid #1976d2",
    borderRadius: "6px",
    padding: "12px 14px",
    marginBottom: "16px",
    fontSize: "0.9rem",
    color: "#333",
    lineHeight: "1.5",
  },

  tabBar: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
    borderBottom: "2px solid #ddd",
    flexWrap: "wrap",
  },
  tab: {
    padding: "10px 16px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "500",
  },
  tabActive: {
    color: "#1976d2",
    borderBottom: "3px solid #1976d2",
    marginBottom: "-2px",
  },
  tabInactive: {
    color: "#999",
  },

  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "12px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    marginTop: 0,
    marginBottom: "10px",
    color: "#333",
  },
  progress: {
    marginBottom: "12px",
    fontWeight: "bold",
    color: "#666",
  },

  // Teil 1
  situationText: {
    fontSize: "1rem",
    color: "#333",
  },
  board: {
    borderTop: "1px solid #ddd",
    marginTop: "8px",
  },
  boardRow: {
    display: "flex",
    borderBottom: "1px solid #eee",
    padding: "6px 0",
  },
  boardLabel: {
    width: "80px",
    fontWeight: "bold",
    color: "#1976d2",
  },
  boardContent: {
    flex: 1,
  },
  boardItem: {
    fontSize: "0.95rem",
    color: "#555",
  },

  optionsRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  optionButton: {
    flex: "1 1 30%",
    minWidth: "120px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "8px 10px",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "0.95rem",
    transition: "all 150ms",
    backgroundColor: "#f0f0f0",
    fontFamily: "sans-serif",
  },
  optionLetter: {
    fontWeight: "bold",
  },

  // Teil 2
  adsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "8px",
  },
  adButton: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 150ms",
    backgroundColor: "#ffffff",
    fontFamily: "sans-serif",
  },
  adId: {
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "4px",
    color: "#1976d2",
  },
  adTitle: {
    fontWeight: "500",
    fontSize: "0.9rem",
    marginBottom: "4px",
    color: "#333",
  },
  adText: {
    fontSize: "0.8rem",
    color: "#666",
  },
  correctAdBox: {
    backgroundColor: "#e2f7c5",
    padding: "8px",
    borderRadius: "4px",
    marginTop: "8px",
    borderLeft: "3px solid green",
  },

  // Teil 3 & 4
  textContent: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#333",
  },
  statementText: {
    fontStyle: "italic",
    fontSize: "0.95rem",
    color: "#333",
    marginBottom: "10px",
  },
  rfRow: {
    display: "flex",
    gap: "12px",
  },
  rfButton: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "500",
    transition: "all 150ms",
    backgroundColor: "#f0f0f0",
    fontFamily: "sans-serif",
  },
  mcQuestionText: {
    fontWeight: "500",
    fontSize: "0.95rem",
    marginBottom: "8px",
    color: "#333",
  },
  mcButtonsRow: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  mcButton: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "0.95rem",
    transition: "all 150ms",
    backgroundColor: "#f0f0f0",
    fontFamily: "sans-serif",
  },
  feedbackBox: {
    backgroundColor: "#fff3cd",
    padding: "8px",
    borderRadius: "4px",
    marginBottom: "8px",
    borderLeft: "3px solid #ff9800",
    color: "#333",
  },

  feedback: {
    marginTop: "10px",
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
  },
  explanation: {
    fontStyle: "italic",
    color: "#666",
    marginTop: "8px",
  },

  nextRow: {
    marginTop: "12px",
    textAlign: "right",
  },
  nextButton: {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "white",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "500",
    transition: "all 150ms",
  },
  // ===============================
  // Lesen Teil 5 – Lückentext
  // ===============================
  textWithGaps: {
    fontSize: "1rem",
    lineHeight: "2.2",
  },

  gapContainer: {
    display: "inline-flex",
    alignItems: "center",
    margin: "0 6px",
  },

  gapNumber: {
    fontWeight: "bold",
    marginRight: "4px",
  },

  gapOptions: {
    display: "flex",
    gap: "6px",
  },

  gapOption: {
    padding: "4px 8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#fff",
  },
};

export default App;
