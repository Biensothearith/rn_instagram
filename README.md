✅ WEBSITE PNG                                                                                   
📌📌📌 https://www.cleanpng.com/


✅ CONVERT PNG TO SVG                                                                                    
📌📌📌 https://convertio.co/


✅ Add SVG                                                                                    
      👉 npm install react-native-svg --save                                                                                   
      👉 npm install react-native-svg-transformer --save                                                                                   
config
            🎊 metro.config.js                                                                                    
            ++++++++++++++++++++++++++++++++++
            

            const { getDefaultConfig } = require("metro-config");
            module.exports = (async () => { 
                  const {  
                        resolver: { 
                              sourceExts, 
                              assetExts 
                        }  
                  } = await getDefaultConfig(); 
                  return {
                        transformer: {      
                              babelTransformerPath: require.resolve("react-native-svg-transformer")    
                        },    
                        resolver: {
                              assetExts: assetExts.filter(ext => ext !== "svg"),
                              sourceExts: [...sourceExts, "svg"]    
                        }};
            })();


