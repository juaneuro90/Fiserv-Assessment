import {Response} from "express";

interface UserOptions {
    firstName: string;
    lastName: string;
    clientId: string;
}

class Functions {
    v2Parse (data: string)  {
        let firstSplit = data.split('0000', 2);
        let lastSplit = firstSplit[1].split('000', 2);
        let prefix = lastSplit[1].slice(0, -4);
        let suffix = lastSplit[1].slice(3);

        return {
            firstName : firstSplit[0],
            lastName : lastSplit[0],
            clientId : prefix+'-'+suffix
        }
    };

    v1Parse (data: string) {
        let firstName = data.slice(0, -17);
        let lastName = data.slice(8, -7);
        let clientId = data.slice(data.lastIndexOf('0')+1);

        return {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    };

    sendData (res: Response, data: UserOptions) {
        res.status(200).json({
            statusCode: 200,
            data: data
        });
    };
}

export default new Functions();