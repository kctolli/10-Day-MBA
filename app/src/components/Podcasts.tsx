const links = [
    {
        name: "Overview",
        url: "6BkXMOq6RuKU8I4eIgVwce?si=Ec5cB8wBT9GvHToJP2UaRQ"
    },
    {
        name: "Day 1: Marketing",
        url: "2PXmAmvbBujHtUrWlMXB8q?si=bIgHZBf3TmiR47cqSskaIg"
    },
    {
        name: "Day 2: Ethics",
        url: "3zPShvnUAQQ7OOTwRzdmmG?si=OmdxBlfvTw6d-wcx98fRbQ"
    },
    {
        name: "Day 3: Accounting",
        url: "7ARVfXeWFoDqSguCKSCGh4?si=_Dr-Fud9QbWGecLbL3ZnAQ"
    },
    {
        name: "Day 4: Organizational Behavior",
        url: "1IpbT4fKd16jWGdDBw2e3G?si=4Mq1Q2F7QX27gd2yZkd2ow"
    },
    {
        name: "Day 5: Quantitative Analysis",
        url: "2B72LsDYWvzqWmlyQF7STq?si=7C3DdaJtSW67XbST_X9Uig"
    },
    {
        name: "Day 6: Finance",
        url: "4628gwKMuB7U0k9IvhbMKo?si=oF3TUd7GRM-E_LWkf68FIw"
    },
    {
        name: "Day 7: Operations",
        url: "32RYpcfAJ0ibExYwMLmSVN?si=qxNx-1gNR2OfDclBBmlT1A"
    },
    {
        name: "Day 8: Economics",
        url: "1lTPIxlysl3KY9FPOS0nUa?si=N74VZJJ8SPSzgnK4UtBwCQ"
    },
    {
        name: "Day 9: Strategy",
        url: "3unW8mtuoKjJ9L7UvopTtb?si=--fsdn7bS7SYEGFnYdQZlg"
    },
    {
        name: "Day 10: MBA Minicourses",
        url: "2peGRbLKtne2au9TE17nzL?si=38EpREYUR3OLH5sPWiKYjA"
    }
];

const ListLinks = ({link}: {link: {name: string, url?: string}}) => (
    <li>
        <a 
            href={`https://open.spotify.com/episode/${link.url}`} 
            target="_blank" 
            rel="noopener noreferrer"
        >{link.name}</a>
    </li>
);

export default function Podcasts() {
    return (
        <>
            <h2>Podcasts</h2>
            <ul>{links.map((link: any) => <ListLinks link={link}/>)}</ul>
        </>
    );
}
