import './Body.css';
import leaves from '../icons/bg-leaves.svg';
import decals from '../icons/bg-decals.svg';
import appstore from '../icons/appstore.webp';
import playstore from '../icons/playstore.png';
import search from '../icons/product-search.svg';
import smartphone from '../icons/product-smartphone.svg'
import endless from '../icons/product-work.svg';
import decals2 from '../icons/bg-decals2.svg';
import venom from '../icons/laravel-mix.svg';
import eyeglass from '../icons/how-to-read-code.svg';
import decals3 from '../icons/bg-decals3.svg';

const Body = () => {
    return (
        <div class='container'>
            <img class='topimg' src={leaves}></img>

            <div class='protoapp'>
                <header>
                    Protoapp
                </header>
                <h3 class='text'>
                    Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                </h3>
                <button class='buttonblue'>
                    Get Started
                </button>
            </div>

            <img class='decals' src={decals}></img>

            <div class='appPlayStore'>
                <img class='android' src={playstore}></img>
                <img class='ios' src={appstore}></img>
            </div>

            <div class="meet">
                <header>
                    Meet Protoapp
                </header>
                <h3 class="text2">
                    The app lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation
                </h3>
            </div>

            <div class='discover'>
                <div class='disc'>
                    <h1 class='text3'>
                        Discover
                    </h1>
                    <h4 class='text31'>
                        Get information on using these
                        guidelines whenever you are using
                        therefore they have the same style and
                        quality.
                    </h4>
                </div>
                <img class='search' src={search}></img>
            </div>

            <div class='augment'>
                <img class='augmented' src={smartphone}></img>
                <div class='aug'>
                    <h1 class='text4'>
                        Augmented
                    </h1>
                    <h4 class='text41'>
                        Word salad often arouses curiosity due to its seemingly intelligent and tasteful play on words.
                    </h4>
                </div>
            </div>

            <div class='endless'>
                <div class='end'>
                    <h1 class='text5'>
                        Endless Possibilities
                    </h1>
                    <h4 class='text51'>
                        Management Systems shouldn't be a bore. Run out of words? Heres some lorem ipsum: Lorem ipsum dolor sit amet.
                    </h4>
                </div>
                <img class='work' src={endless}></img>
            </div>



            <div class='bluebox'>
                <div class='dive'>
                    <div class='letters'>
                        <h1 class='ready'>
                            Deep Dive. Ready?
                        </h1>
                        <h4 class='words'>
                            So are we. Unless. You're. Not. Word filler.
                        </h4>
                        <div class='appPlayStore2'>
                            <img class='android2' src={playstore}></img>
                            <img class='ios2' src={appstore}></img>
                        </div>
                        <img class='decals2' src={decals2}></img>
                    </div>
                </div>
            </div>

            <div class='call'>
                <h1>Last Call to Action</h1>
            </div>

            <div class='another'>
                <h4>Another section content goes here</h4>
            </div>

            <div class='doubleBox'>
                <div class='yellow'>
                    <div class='yinner'>
                        <img src={venom}></img>
                        <button class='automate'>AUTOMATION</button>
                    </div>
                    <div class='yellowtxt'>
                        <h5>ROLL OUT</h5>
                        <h2>Automatic Prototyping</h2>
                        <h5>Webpack is the most powerful and flexible asset compilation tool available today. With that power, however, comes a certain level of complexity.</h5>
                    </div>
                </div>
                <div class='bluish'>
                    <div class='bluinner'>
                    <img src={eyeglass}></img>
                    <button class='simple'>SIMPLICITY</button>
                    </div>
                    <div class='bluetxt'>
                        <h5>SIP COFFEE</h5>
                        <h2>Complexity Simplified</h2>
                        <h5>I know too many backend developers who are stifled by one glaring phobia: CSS. How do you construct a layout when nothing lines up?</h5>
                    </div>
                </div>
            </div>

            <div class='decals3'>
                    <img src={decals3}></img>
            </div>

        </div>
    );
};

export default Body;