// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// #[tauri::command]
// fn save_config(config: String) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", config)
// }


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    // listen for when a key is down
    // window.addEventListener('keydown', (event) => {
    //     // if the key is the space bar, then prevent the default action
    //     if (event.code === 'Space') {
    //         event.preventDefault()
    //     }
    // })

    
    
}


