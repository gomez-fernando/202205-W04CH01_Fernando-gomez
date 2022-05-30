import { Buttonv } from '../buttonv/buttonv';
import { Buttonx } from '../buttonx/buttonx';

export function Card({person}) {
    console.log(person);
    return (
        <li className="gentleman">
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={`./img/` }
                    alt="The Fary pointing at you"
                />
                <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">The Fary</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        Influencer
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>{' '}
                        RIP
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>{' '}
                        Pending
                    </li>
                </ul>
            </div>

            <Buttonv></Buttonv>
            <Buttonx></Buttonx>
        </li>
    );
}
