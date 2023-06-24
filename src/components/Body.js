import './Body.css';
import leaves from '../icons/bg-leaves.svg';
import decals from '../icons/bg-decals.svg';
import appstore from '../icons/appstore.webp';
import playstore from '../icons/playstore.png';
import search from '../icons/product-search.svg';
import smartphone from '../icons/product-smartphone.svg'
import endless from '../icons/product-work.svg';

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
                <button class='button'>
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

            <div class='dive'>
                

            </div>


        </div>
    );
};

export default Body;