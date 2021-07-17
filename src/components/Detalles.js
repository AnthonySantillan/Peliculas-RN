import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const Detalles = ({ route }) => {
    const { movie } = route.params;
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const api_url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=7d73b140`
        fetch(api_url)
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setDatos(resultado);
                console.log(datos);
            });
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    datos.Poster === "N/A"
                        ?
                        <View style={styles.borde}>
                            <Image
                                style={styles.images}
                                source={require('./imagenes/nofound.jpg')}
                            />
                        </View>
                        :
                        <View style={styles.borde}>
                            <Image
                                style={styles.images}
                                source={{ uri: datos.Poster }}
                            />
                        </View>
                }
                <View style={styles.container2}>
                    <View style={[styles.box, styles.box1]}>
                        <Text style={styles.texto3}>Año de publicacion</Text>
                    </View>
                    <View style={[styles.box2, styles.box2]}>
                        <Text style={styles.texto2}>{datos.Released}</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <Text style={styles.texto3}>Actores</Text>
                    </View>
                    <View style={[styles.box2, styles.box2]}>
                        <Text style={styles.texto2}>{datos.Actors}</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <Text style={styles.texto3}>Resumen</Text>
                    </View>
                    <View style={[styles.box2, styles.box2]}>
                        <Text style={styles.texto2}>{datos.Plot}</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <Text style={styles.texto3}>Genero</Text>
                    </View>
                    <View style={[styles.box2, styles.box2]}>
                        <Text style={styles.texto2}>{datos.Genre}</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <Text style={styles.texto3}>Productora</Text>
                    </View>
                    <View style={[styles.box2, styles.box2]}>
                        <Text style={styles.texto2}>{datos.Production}</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <Text style={styles.texto3}>Premios</Text>
                    </View>
                    <View style={[styles.box2, styles.box2]}>
                        <Text style={styles.texto2}>{datos.Awards}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#050404',
    },
    images: {
        width: 400,
        height: 550,
        margin: 5,
        alignSelf: 'center',
        borderRadius: 20,
    },
    borde: {
        width: 410,
        height: 560,
        margin: 30,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: "#F49D04"
    },
    texto: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    },
    texto2: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        margin: 10,
    },
    texto3: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        margin: 10,
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
    },
    box: {
        height: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    box2: {
        height: 150,
    },
    box1: {
        flex: 1,
        backgroundColor: '#212121'
    },
    box2: {
        flex: 10,
        backgroundColor: '#F49D04'
    },
});
