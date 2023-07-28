
#  Install the Ionic CLI (if not already installed)
if ! command -v ionic &> /dev/null; then
  npm install -g @ionic/cli
fi

# Create a new Ionic Angular project
echo "Enter the name of your Ionic Angular project:"
read project1

ionic start project1 blank --type=angular

#  Navigate to the project folder
cd ./project1

#Use CLi to generate some pages and services
ionic g page pages/home
ionic g page pages/tableUI
ionic g service services/Catdisplay

#  Serve the app
ionic serve

