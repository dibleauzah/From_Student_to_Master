import SwiftUI

struct ContentView: View {
    @State private var diaryEntries: [DiaryEntry] = []
    @State private var newEntryText: String = ""

    var body: some View {
        NavigationView {
            VStack {
                TextEditor(text: $newEntryText)
                    .frame(height: 100)
                    .border(Color.gray)
                    .padding()
                
                Button(action: {
                    addDiaryEntry()
                }) {
                    Text("Add Entry")
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(8)
                }
                .padding()
                
                List {
                    ForEach(diaryEntries) { entry in
                        Text(entry.text)
                    }
                    .onDelete(perform: deleteDiaryEntry)
                }
            }
            .navigationBarTitle("Personal Diary")
            .navigationBarItems(trailing: EditButton())
        }
    }
    
    private func addDiaryEntry() {
        if !newEntryText.isEmpty {
            let newEntry = DiaryEntry(id: UUID(), text: newEntryText)
            diaryEntries.append(newEntry)
            newEntryText = ""
            saveDiaryEntries()
        }
    }
    
    private func deleteDiaryEntry(at offsets: IndexSet) {
        diaryEntries.remove(atOffsets: offsets)
        saveDiaryEntries()
    }
    
    private func saveDiaryEntries() {
        if let encoded = try? JSONEncoder().encode(diaryEntries) {
            UserDefaults.standard.set(encoded, forKey: "diaryEntries")
        }
    }
    
    private func loadDiaryEntries() {
        if let savedEntries = UserDefaults.standard.data(forKey: "diaryEntries"),
           let decodedEntries = try? JSONDecoder().decode([DiaryEntry].self, from: savedEntries) {
            diaryEntries = decodedEntries
        }
    }
    
    init() {
        loadDiaryEntries()
    }
}

struct DiaryEntry: Identifiable, Codable {
    let id: UUID
    let text: String
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
