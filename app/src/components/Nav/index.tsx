import { Link } from 'react-router-dom';

import "./nav.module.css";

export default function Nav () {
    return (
        <nav className="navbar" role="navigation">
            <button>
                <Link to="/day1" className="nav-link">
                    Day 1
                </Link>
            </button>&nbsp;
            <button>
                <Link to="/day2" className="nav-link">
                    Day 2
                </Link>
            </button>&nbsp;
            <button>    
                <Link to="/day3" className="nav-link">
                    Day 3
                </Link>
            </button>&nbsp;
            <button>    
                <Link to="/day4" className="nav-link">
                    Day 4
                </Link>
            </button>&nbsp;
            <button>    
                <Link to="/day5" className="nav-link">
                    Day 5
                </Link>
            </button>&nbsp;
            <button>    
                <Link to="/day6" className="nav-link">
                    Day 6
                </Link>
            </button>&nbsp;
            <button>    
                <Link to="/day7" className="nav-link">
                    Day 7
                </Link>
            </button>&nbsp;
            <button>    
                <Link to="/day8" className="nav-link">
                    Day 8
                </Link>
            </button>&nbsp;
            <button>    
                <Link to="/day9" className="nav-link">
                    Day 9
                </Link>
            </button>&nbsp;
            <button>
                <Link to="/day10" className="nav-link">
                    Day 10
                </Link>
            </button>&nbsp;
            <button>
                <Link to="/podcasts" className="nav-link">
                    Podcasts
                </Link>
            </button>
        </nav>
    );
}
