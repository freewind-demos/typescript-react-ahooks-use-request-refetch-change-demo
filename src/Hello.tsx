import React, {FC, useEffect} from 'react';
import './Hello.pcss';
import {useRequest} from "ahooks";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    console.log("### > Hello")
    const request = useRequest(async () => {
        console.log("### useRequest")
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(1);
            }, 1000)
        })
    })

    useEffect(() => {
        console.log("### request is changed");
    }, [request])

    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div>
            <div>
                <button onClick={() => {
                    request.refresh()
                }}>update
                </button>
            </div>
            <div>request:
                <ul>
                    <li>loading: {JSON.stringify(request.loading)}</li>
                    <li>data: {request.data}</li>
                    <li>error: {request.error}</li>
                </ul>
            </div>
        </div>
    </div>;
}
