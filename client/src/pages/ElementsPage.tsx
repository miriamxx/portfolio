import React from 'react'
import styles from './ElementsPage.module.css'

export default function ElementsPage() {
  return (
    <div className={styles.elementsContainer}>
      <header className={styles.header}>
        <h1>Elements</h1>
        <p>Ipsum dolor sit amet nullam</p>
      </header>

      <section id="content" className={styles.content}>
        {/* Text Section */}
        <section className={styles.textSection}>
          <h2>Text</h2>
          <p>
            This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is{' '}
            <em>emphasized</em>.
            This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
            This is <u>underlined</u> and this is code: <code>for (;;) {'{}'}</code>. Finally,{' '}
            <a href="#">this is a link</a>.
          </p>
          <hr />
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
            faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <hr />
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <hr />
          <h3>Blockquote</h3>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod.
            Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam
            adipiscing eu felis.
          </blockquote>
          <h3>Preformatted</h3>
          <pre>
            <code>{`i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';`}</code>
          </pre>
        </section>

        {/* Lists Section */}
        <section className={styles.listsSection}>
          <h2>Lists</h2>
          <div className={styles.row}>
            <div className={styles.colHalf}>
              <h3>Unordered</h3>
              <ul>
                <li>Dolor pulvinar magna etiam.</li>
                <li>Sagittis sed lorem adipiscing.</li>
                <li>Felis enim etiam feugiat.</li>
                <li>Ipsum lorem nullam consequat.</li>
              </ul>
              <h3>Alternate</h3>
              <ul className={styles.altList}>
                <li>Dolor pulvinar magna etiam.</li>
                <li>Sagittis sed lorem adipiscing.</li>
                <li>Felis enim etiam feugiat.</li>
                <li>Ipsum lorem nullam consequat.</li>
              </ul>
            </div>
            <div className={styles.colHalf}>
              <h3>Ordered</h3>
              <ol>
                <li>Dolor pulvinar etiam.</li>
                <li>Etiam vel felis viverra.</li>
                <li>Felis enim feugiat.</li>
                <li>Dolor pulvinar etiam.</li>
                <li>Etiam vel felis lorem.</li>
                <li>Felis enim et feugiat.</li>
              </ol>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
