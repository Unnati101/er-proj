import React from "react";
import "../globals.css";
import Image from "next/image";
import Fingerprint from "../../public/fingerprint.svg";

export const MediumSecurity = () => {
    return (
        <div className={`medium-security`}>
            <div className="large-button">
                <div className="text">
                    <div className="text-wrapper">Update your data</div>
                </div>
            </div>

            <div className="icon">
                <Image className="fingerprint" alt="Fingerprint" src={Fingerprint} />
            </div>

            <div className="title">Update your data !</div>

            <p className="body">
                Update your data and find
                <br />
                the best opportunities
            </p>
        </div>
    );
};