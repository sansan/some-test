const testData1 = [
    {
        state: 'processing'
    },
    {
        state: 'error',
        errorCode: 'NO_STOCK',
    },
];

const testData2 = [
    {
        state: 'processing'
    },
    {
        state: 'error',
        errorCode: 'INCORRECT_DETAILS',
    },
];

const testData3 = [
    {
        state: 'processing'
    },
    {
        state: 'error',
        errorCode: null,
    },
];

const testData4 = [
    {
        state: 'processing'
    },
    {
        state: 'success'
    }
];

/**
 * Gets the processing page
 * @param {array} data
 */
function getProcessingPage(data) {
    return processData(data)
}

/**
 * Creates a promise timeout
 * @param {number} delayMs
 */
const PromiseTimeout = (delayMs) => new Promise(function (resolve, reject) {
        setTimeout(resolve, delayMs);
    });


const processData = async (data, index = 0) => {

    switch (data[index].state) {
        case 'processing':
            await PromiseTimeout(2000)

            return processData(data, index + 1)

        case 'error':
            switch (data[index].errorCode) {
                case 'NO_STOCK':
                    return {title: 'Error page', message: 'No stock has been found'}
                case 'INCORRECT_DETAILS':
                    return {title: 'Error page', message: 'Incorrect details have been entered'}
                default:
                    return {title: 'Error page', message: null}
            }

        case 'success':
            return {title: 'Order complete', message: null}

        default:
            return false
    }
}

getProcessingPage(testData1).then((res) => console.log(res));
getProcessingPage(testData2).then((res) => console.log(res));
getProcessingPage(testData3).then((res) => console.log(res));
getProcessingPage(testData4).then((res) => console.log(res));
