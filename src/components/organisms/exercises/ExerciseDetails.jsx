import React from 'react';
import Card from "../../atoms/card/Card";
import TitledSection from "../../molecules/titled-section/TitledSection";
import ReactPlayer from "react-player";

const ExerciseDetails = ({data, isLoading}) => {
    console.log(data)
    return (
        <Card className={'p-8'}>
            <div className={'flex flex-col items-center justify-center mb-8'}>
                <h1 className={'font-bold text-center text-xl mb-4'}>{data?.name}</h1>
                <ReactPlayer controls url={data?.videoUrl}/>
            </div>
            <div className={'grid grid-cols-4 gap-8'}>
                <TitledSection title={"Przebieg ćwiczenia"}>
                    <ul className={'list-disc pl-4'}>
                        {data?.descriptionSteps?.map((li, id) => <li className={'text-sm text-gray-700'}
                                                                     key={li + id}>{li}</li>)}
                    </ul>
                </TitledSection>
                <TitledSection title={"Zaangażowane mięśnie"}>
                    <ul className={'list-disc pl-4'}>
                        {data?.muscles?.map((li, id) => <li className={'text-sm text-gray-700'}
                                                            key={li + id}>{li}</li>)}
                    </ul>
                </TitledSection>
                <TitledSection title={"Wymagany sprzęt"}>
                    <ul className={'list-disc pl-4'}>
                        {data?.equipment?.map((li, id) => <li className={'text-sm text-gray-700'}
                                                              key={li + id}>{li}</li>)}
                    </ul>
                </TitledSection>
                <TitledSection title={"Typ ćwiczenia"}>
                    <p className={'text-sm text-gray-700'}>{data?.type}</p>
                </TitledSection>

            </div>
            <div className={'grid grid-cols-3 mt-8 gap-8'}>
                {data?.images?.map(image => <img className={'3'} src={image?.url} alt={image?.alt}/>)}
            </div>
        </Card>
    );
};

export default ExerciseDetails;
