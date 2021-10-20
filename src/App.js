import artist from './assets/artist.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className="my-body">
        <div className="my-sheet">

          <h1 className="my-title"> Aristotle Onassis </h1>

          <h1>1906 - 1975</h1>

          <h2>One of the richest people in the 20th century</h2>

          <p className="my-normal-text"> 
            Aristotle Socrates Onassis (Greek: Αριστοτέλης Ωνάσης, 
            Aristotelis Onasis; 20 January 1906 – 15 March 1975),
            [1] commonly called Ari or Aristo Onassis,
            was a Greek-Argentine shipping magnate, 
            who amassed the world's largest privately owned shipping 
            fleet and was one of the world's richest and most famous men.
          </p>

          <div className="my-img-container">

            <img src={artist} className="my-img"/>

            <div className="my-image-description-container">
              <span className="my-image-description">The most well-known portrait of Onassis.</span>
            </div>

          </div>

          <h2 className="my-title-list">  The following list is a time line of Onassis Life</h2>

          <ul className="my-list" >
              <li><b>1906</b> - born in Karataş, Smyrna, Ottoman Empire.</li>

              <li><b>1922</b> - He left from Smyrna during the great fire of Smyrna in 1922.</li>

              <li><b>1932</b> - He went to Buenos Aires, Argentina and start working as a telephone operator.</li>

              <li><b>1929</b> - He relocated to New York and started his shipping businesses.</li>

              <li><b>1946</b> - Onassis married Athina Livanos, daughter of shipping magnate Stavros G. Livanos and Arietta Zafrikakis, on 28 December 1946. The couple had become largely separated by the mid-1950s.</li>

              <li><b>1950</b>-1956 - Onassis had success whaling off the Peruvian coast.</li>

              <li><b>1953</b> - In Monaco he started to purchase the shares of Monaco's SMB using the tax haven of Panama and finally take the control of SBM.</li>

              <li><b>1954</b> - Cancelation of the agreement between the Saudi government and Aristotle Onassis to transport Saudi oil on his tankers and "in any case, to make the agreement ineffective".</li>

              <li><b>1956</b> - Aristotle Onassis signed a contract granting him the operational rights to the Greek air transport industry. Olympic Airways was founded.</li>

              <li><b>1957</b> - Onassis and opera prima donna Maria Callas embarked on an affair despite the fact that they were both married.</li>

              <li><b>1966</b> - Rainer of Monaco approved a plan to create 600.000 new shares in SBM reducing Onassis's stake to under a third.</li>

              <li><b>1967</b> - Onassis court until he left Monaco.</li>

              <li><b>1968</b> - Onassis announced the launch of Project Omega, a $400 million investment program that aimed to build considerable industrial infrastructure in Greece including an oil refinery and aluminum smelter.</li>

              <li><b>1968</b> - Onassis ended his relationship with Callas to marry Jacqueline Kennedy, widow of U.S. President John F. Kennedy.</li>

              <li><b>1975</b> Onassis died at age 69 on 15 March 1975 at the American Hospital of Paris in Neuilly-sur-Seine, France, of respiratory failure, a complication of the myasthenia gravis from which he had been suffering during the last years of his life.</li>
          </ul>
          <p className="my-source">Read more about Aristotle Onassis on <a href="https://en.wikipedia.org/wiki/Aristotle_Onassis" >Wikipedia</a>.</p>
        </div>
      </div>
      <footer className="my-footer">
        Writtern and coded by <a href="https://www.freecodecamp.org/glgeorgiou" >George Georgiou.</a>
      </footer>
    </>
  );
}

export default App;
