import React, {FC, useState} from 'react';
import './Hello.pcss';
import {useRequest} from "ahooks";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [version, setVersion] = useState(0)

    const request = useRequest(async () => {
        console.log("### version", version)
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(version);
            }, 1000)
        })
    })
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div>
            <div>
                <button onClick={() => {
                    setVersion(n => n + 1);
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
