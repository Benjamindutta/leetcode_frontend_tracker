import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const YoutubeModal = (props) => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const demoData = {
        "kind": "youtube#searchListResponse",
        "etag": "996jjx_Q6jMqRu_3Ok1OIb5Xsbs",
        "nextPageToken": "CAYQAA",
        "regionCode": "IN",
        "pageInfo": {
            "totalResults": 5214,
            "resultsPerPage": 6
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "UovD-z6KHH3o2KViZYmxIHpbD48",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "wePWCZjtrOo"
                },
                "snippet": {
                    "publishedAt": "2022-02-28T11:30:09Z",
                    "channelId": "UCbW63uLlDnsL7l992Z9nF_Q",
                    "title": "Min Stack Leetcode | Get Min at pop | solution stack Hindi Explained | Data structure &amp; Algorithms",
                    "description": "This is the video under the series of DATA STRUCTURE & ALGORITHM in a STACK Playlist. Now we are going to solve a stack ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wePWCZjtrOo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wePWCZjtrOo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wePWCZjtrOo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Hello World",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-02-28T11:30:09Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "pwwwa4HjWR4B55kCtl3-7J15e3c",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "qkLl7nAwDPo"
                },
                "snippet": {
                    "publishedAt": "2021-06-23T16:00:23Z",
                    "channelId": "UC_mYaQAE6-71rjSN6CeCA-g",
                    "title": "Design Min Stack - Amazon Interview Question - Leetcode 155 - Python",
                    "description": "https://neetcode.io/ - A better way to prepare for Coding Interviews Twitter: https://twitter.com/neetcode1 Discord: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qkLl7nAwDPo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qkLl7nAwDPo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qkLl7nAwDPo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "NeetCode",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-06-23T16:00:23Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "HsDfMsKfdRXaTHAJgvTLXYVPQio",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "8UegNFCUQks"
                },
                "snippet": {
                    "publishedAt": "2020-04-10T15:33:46Z",
                    "channelId": "UCnxhETjJtTPs37hOZ7vQ88g",
                    "title": "Implement min stack | Leetcode #155",
                    "description": "This video explains how to implement a stack with get minimum operation in just O(1) time. This video explains how to implement ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8UegNFCUQks/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8UegNFCUQks/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8UegNFCUQks/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Techdose",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-04-10T15:33:46Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "IkIROBekZVK4hQUab6K2aBy9mNY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "WxCuL3jleUA"
                },
                "snippet": {
                    "publishedAt": "2019-12-12T01:21:31Z",
                    "channelId": "UC1fLEeYICmo3O9cUsqIi7HA",
                    "title": "LeetCode 155. Min Stack (Algorithm Explained)",
                    "description": "The Best Place To Learn Anything Coding Related - https://bit.ly/3MFZLIZ Preparing For Your Coding Interviews? Use These ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WxCuL3jleUA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WxCuL3jleUA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WxCuL3jleUA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Nick White",
                    "liveBroadcastContent": "none",
                    "publishTime": "2019-12-12T01:21:31Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "_e3oltMIemOaRc6mgZf0OcwaVOI",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "OGtlf5z6lsg"
                },
                "snippet": {
                    "publishedAt": "2020-12-20T21:39:27Z",
                    "channelId": "UCGlLmSr7LwjzFWmPFCSjydg",
                    "title": "Min Stack Leetcode | 3 methods/solutions | Code + Explanation",
                    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. push(x) -- Push element x onto ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OGtlf5z6lsg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OGtlf5z6lsg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OGtlf5z6lsg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Code with Alisha",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-12-20T21:39:27Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "_XozhJ8YBE_5LpgsWAlRU_UjHWs",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "wvsEGZFSkjc"
                },
                "snippet": {
                    "publishedAt": "2020-08-26T17:20:39Z",
                    "channelId": "UCpeu6XjRUC1TkhsCuNlLCNg",
                    "title": "min stack | min stack leetcode | leetcode 155 | 2 stacl | 1 stack | no stack solutions",
                    "description": "Problem Link - https://leetcode.com/problems/min-stack/description/ Subscribe for more educational videos on data structure, ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wvsEGZFSkjc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wvsEGZFSkjc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wvsEGZFSkjc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Naresh Gupta",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-08-26T17:20:39Z"
                }
            }
        ]
    };

    const queryString = `https://www.googleapis.com/youtube/v3/search?key=${props.key_api}&part=snippet&q=${props.question}&maxResults=6&type=video&part=snippet`;
    const getVideos = () => {
        setLoading(true);
        try {
            fetch(queryString, {
                method: 'GET',
            }).then((response) => {
                return response.json();
            }).then((data) => {
                setLoading(false);
                setVideos(data.items);
            });
        } catch (e) {
            setLoading(false);
            setVideos(demoData.items);
        }
    }
    return (
        <div>
            <Modal isOpen={props.isModalOpen} onRequestClose={() => props.setModalIsOpen(false)}>
                <div>
                    <h2>{props.question}</h2>
                    <button onClick={() => props.setIsModalOpen(false)}>X</button>
                    <button onClick={() => getVideos()}>Get help</button>
                    <div className='videos__container'>
                        {
                            loading && <h2>loading ....</h2>
                        }
                        {
                            (videos.length !== 0) && videos.map((vid) => (
                                <iframe className='video__iframe' key={vid.id.videoId} width="300" height="200" src={`https://www.youtube.com/embed/${vid.id.videoId}`} title={vid.snippet.title} ></iframe>
                            ))
                        }
                    </div>
                </div>
            </Modal >
        </div >
    )
}

export default YoutubeModal
