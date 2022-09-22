import './shop.scss'

const Shop = () => {
    return (
        <div className="shop-container">
            <h1>Shop</h1>

           
                <div >
                  <table>
                    {/* border=1 width=200 cellpadding=10 */}
  <tr>
    <td>
      
            <div class="card">
  <img src="https://cdn.shopify.com/s/files/1/0055/5525/7434/products/FlightSimulator_qwZNZFAfLf.png?v=1662222748" alt='bhoo'/>

  <p class="price">€11.81</p>
  <p>Perugia international airport (LIRZ) </p>
  <a href="https://store.inibuilds.com/products/tega-airports-perugia-lirz-msfs">
  <p><button>Add to Cart</button></p>
  </a>
</div>
</td>
<td>
<div class="card2">
  <img src="https://secure.simmarket.com/images/products/f/fa/16404/292011_img10.png" alt='bhoo'/>

  <p class="price">€12.08</p>
  <p> MARINA DI CAMPO AIRPORT (LIRJ) </p>
  <a href="https://secure.simmarket.com/adver-di-simone-apicella-marina-di-campo-airport-lirj-msfs.phtml">
  <p><button>Add to Cart</button></p>
  </a>
</div>
</td>
<td>
<div class="card3">
  <img src="https://cdn.shopify.com/s/files/1/0055/5525/7434/products/FlightSimulator_qwZNZFAfLf.png?v=1662222748" alt='bhoo'/>

  <p class="price">€9.69</p>
  <p>Montichiari international airport (LIPO) </p>
  <a href="https://store.inibuilds.com/products/tega-airports-montichiari-lipo-msfs">
  <p><button>Add to Cart</button></p>
  </a>
</div>
</td>
</tr>
</table>
</div>
<div>
  <p className='comingsoon'>and other products coming soon...</p>
</div>
</div>



    )
}

export default Shop