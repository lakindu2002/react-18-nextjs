type Feed = {
    id: number,
    title: string,
    description: string,
    image: string
}

const getFeed = async () => {
    const feed: Feed[] = [
        {
            id: 1,
            title: 'Title 1',
            description: 'Description 1',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            title: 'Title 2',
            description: 'Description 2',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            title: 'Title 3',
            description: 'Description 3',
            image: 'https://picsum.photos/200/300',
        },
    ]

    const promise: Promise<Feed[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(feed)
        }, 5000)
    });

    return promise;
};

export default async function FeedComponent() {
    const feed = await getFeed();
    return (
        <>
            <p>This is the feed</p>
            {feed.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <img src={item.image} />
                </div>
            ))}
        </>
    )

}