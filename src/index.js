import React, {Component} from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";

import "./styles.css";

class App extends Component {
    state = {
        loading: false
    };

    addSeatCallback = ({row, number, id}, addCb) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log(`Added seat ${number}, row ${row}, id ${id}`);
                const newTooltip = `tooltip for id-${id} added by callback`;
                addCb(row, number, id, newTooltip);
                this.setState({loading: false});
            }
        );
    };

    addSeatCallbackContinousCase = (
        {row, number, id},
        addCb,
        params,
        removeCb
    ) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                if (removeCb) {
                    await new Promise(resolve => setTimeout(resolve, 750));
                    console.log(
                        `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
                    );
                    removeCb(params.row, params.number);
                }
                await new Promise(resolve => setTimeout(resolve, 750));
                console.log(`Added seat ${number}, row ${row}, id ${id}`);
                const newTooltip = `tooltip for id-${id} added by callback`;
                addCb(row, number, id, newTooltip);
                this.setState({loading: false});
            }
        );
    };

    removeSeatCallback = ({row, number, id}, removeCb) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log(`Removed seat ${number}, row ${row}, id ${id}`);
                // A value of null will reset the tooltip to the original while '' will hide the tooltip
                const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
                removeCb(row, number, newTooltip);
                this.setState({loading: false});
            }
        );
    };

    render() {
        const rowsCentro = [
            [
                {id: 1, number: 1, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 9, number: 9, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 10, number: 10, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 11, number: 11, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 12, number: 12, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 13, number: 13, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 14, number: 14, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: true, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: true, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                null,
                null,
                null,
                null,
                null,
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                null,
                null,
                null,
                null,
                null,
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                null,
                null,
                null,
                null,
                null,
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                null,
                null,
                null,
                null,
                null,
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                null,
                null,
                null,
                null,
                null,
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                null,
                null,
                null,
                null,
                null,
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                {id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                null,
                null,
                null,
                null,
                null,
                {id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you"},
                {id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you"}
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null,
                null,
                null,
                null,
                null,
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 17, number: 17, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 18, number: 18, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 19, number: 19, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 20, number: 20, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 21, number: 21, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ]
        ];

        const alaDerecha1 = [
            [
                { id: 1, number: 1, isReserved: true, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: true, orientation: "north", tooltip: "Reserved by you" },
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null,
                null,
                null,
                null,
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null,
                null,
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                null
            ]
        ];

        const ala1Izq =  [
          [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              { id: 1, number: 1, isReserved: true, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: true, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              null,
              null,
              null,
              null,
              null,
              { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              null,
              null,
              null,
              { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              null,
              { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              { id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              { id: 16, number: 16, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
          [
              null,
              { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
              { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
          ],
            [
                null,
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                null,
                { id: 15, number: 15, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 14, number: 14, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ]
        ];

        const izq = [
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ]
        ];

        const der = [
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ],
            [
                { id: 1, number: 1, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 2, number: 2, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 3, number: 3, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 4, number: 4, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 5, number: 5, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 6, number: 6, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 7, number: 7, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 8, number: 8, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 9, number: 9, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 10, number: 10, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 11, number: 11, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 12, number: 12, isReserved: false, orientation: "north", tooltip: "Reserved by you" },
                { id: 13, number: 13, isReserved: false, orientation: "north", tooltip: "Reserved by you" }
            ]
        ]

        const {loading} = this.state;
        return (
            <div>
                <h1>Distribucion sillas CDO</h1>
                <div style={{marginTop: "10%", display: "flex", width: "fit-content", marginLeft: "10%"}}>
                    <div style={{transform: "rotate(90deg)"}}>
                        <SeatPicker
                            addSeatCallback={this.addSeatCallbackContinousCase}
                            removeSeatCallback={this.removeSeatCallback}
                            rows={izq}
                            maxReservableSeats={65}
                            alpha
                            visible
                            selectedByDefault
                            //loading={loading}
                            tooltipProps={{multiline: true}}
                            continuous
                        />
                    </div>
                    <div style={{width: "900px"}}>

                    </div>
                    <div style={{transform: "rotate(270deg)"}}>
                        <SeatPicker
                            addSeatCallback={this.addSeatCallbackContinousCase}
                            removeSeatCallback={this.removeSeatCallback}
                            rows={der}
                            maxReservableSeats={78}
                            alpha
                            visible
                            selectedByDefault
                            //loading={loading}
                            tooltipProps={{multiline: true}}
                            continuous
                        />
                    </div>
                </div>
                <div style={{marginTop: "15%", display: "flex", width: "fit-content"}}>
                    <div style={{marginRight: "10%"}}>
                        <SeatPicker
                            addSeatCallback={this.addSeatCallbackContinousCase}
                            removeSeatCallback={this.removeSeatCallback}
                            rows={ala1Izq}
                            maxReservableSeats={130}
                            alpha
                            visible
                            selectedByDefault
                            //loading={loading}
                            tooltipProps={{multiline: true}}
                            continuous
                        />
                    </div>
                    <div>
                        <SeatPicker
                            addSeatCallback={this.addSeatCallbackContinousCase}
                            removeSeatCallback={this.removeSeatCallback}
                            rows={rowsCentro}
                            maxReservableSeats={212}
                            alpha
                            visible
                            selectedByDefault
                            //loading={loading}
                            tooltipProps={{multiline: true}}
                            continuous
                        />
                    </div>
                    <div style={{marginLeft: "10%"}}>
                        <SeatPicker
                            addSeatCallback={this.addSeatCallbackContinousCase}
                            removeSeatCallback={this.removeSeatCallback}
                            rows={alaDerecha1}
                            maxReservableSeats={136}
                            alpha
                            visible
                            selectedByDefault
                            //loading={loading}
                            tooltipProps={{multiline: true}}
                            continuous
                        />
                    </div>

                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
