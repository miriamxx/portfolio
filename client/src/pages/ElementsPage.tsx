import React from 'react'
import styles from './ElementsPage.module.css'

export default function ElementsPage(){
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Elements</h1>
        <p>Ipsum dolor sit amet nullam</p>
      </header>

      <main className={styles.main}>
        <section className={styles.content}>
          <section>
            <h2>Text</h2>
            <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>. This is <code>for (;;) { '...' }</code>.</p>
            <hr />
            <h2>Heading Level 2</h2>
            <h3>Heading Level 3</h3>
            <h4>Heading Level 4</h4>
          </section>

          <section>
            <h2>Lists</h2>
            <div className={styles.row}>
              <div className={styles.col6}>
                <h3>Unordered</h3>
                <ul>
                  <li>Dolor pulvinar magna etiam.</li>
                  <li>Sagittis sed lorem adipiscing.</li>
                </ul>
              </div>
              <div className={styles.col6}>
                <h3>Ordered</h3>
                <ol>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Etiam vel felis viverra.</li>
                </ol>
              </div>
            </div>
          </section>

        </section>
      </main>

      <footer className={styles.footer}>
        <p>© Portfolio. Elements page migrated to React.</p>
      </footer>
    </div>
  )
}
