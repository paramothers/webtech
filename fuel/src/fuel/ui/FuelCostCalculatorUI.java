package fuel.ui;

import fuel.domain.FuelCostCalculationParams;
import fuel.io.FuelCalculationFileWriter;
import fuel.io.FuelCostFileReader;
import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Priority;
import javafx.scene.layout.TilePane;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.stage.Stage;
import javafx.stage.Window;

import fuel.util.ConstantUtil;

public class FuelCostCalculatorUI extends Application {

	
	FuelCostCalculationParams fuelCostCalculationParams = new FuelCostCalculationParams();
	FuelCalculationFileWriter fuelCalculationFileWriter = new FuelCalculationFileWriter();
	FuelCostFileReader fuelCostFileReader = new FuelCostFileReader();

	//
	//
	//
	@Override
	public void start(Stage primaryStage) throws Exception {
		primaryStage.setTitle("Cost Estimation JavaFX Application");
		fuelCostFileReader.getFuelCostPerLiter(fuelCostCalculationParams);

		// Create the registration form grid pane
		GridPane gridPane = createRegistrationFormPane();
		// Add UI controls to the registration form grid pane
		addUIControls(gridPane);
		// Create a scene with registration form grid pane as the root node
		Scene scene = new Scene(gridPane, 800, 500);
		// Set the scene in primary stage
		primaryStage.setScene(scene);

		primaryStage.show();
	}

	private GridPane createRegistrationFormPane() {
		// Instantiate a new Grid Pane

		GridPane gridPane = new GridPane();

		// Position the pane at the center of the screen, both vertically and
		// horizontally
		gridPane.setAlignment(Pos.CENTER);

		// Set a padding of 20px on each side
		gridPane.setPadding(new Insets(40, 40, 40, 40));

		// Set the horizontal gap between columns
		gridPane.setHgap(10);

		// Set the vertical gap between rows
		gridPane.setVgap(10);

		// Add Column Constraints

		// columnOneConstraints will be applied to all the nodes placed in column one.
		ColumnConstraints columnOneConstraints = new ColumnConstraints(100, 100, Double.MAX_VALUE);
		columnOneConstraints.setHalignment(HPos.RIGHT);

		// columnTwoConstraints will be applied to all the nodes placed in column two.
		ColumnConstraints columnTwoConstrains = new ColumnConstraints(200, 200, Double.MAX_VALUE);
		columnTwoConstrains.setHgrow(Priority.ALWAYS);

		gridPane.getColumnConstraints().addAll(columnOneConstraints, columnTwoConstrains);

		return gridPane;
	}

	private void addUIControls(GridPane gridPane) {
		// Add Header
		Label headerLabel = new Label("Calculating cost");
		headerLabel.setFont(Font.font("Arial", FontWeight.BOLD, 24));
		gridPane.add(headerLabel, 0, 0, 2, 1);
		GridPane.setHalignment(headerLabel, HPos.CENTER);
		GridPane.setMargin(headerLabel, new Insets(20, 0, 20, 0));

		// Add Name Label
		Label nameLabel = new Label("Distance in miles : ");
		gridPane.add(nameLabel, 0, 1);

		// Add Name Text Field
		TextField distanceInMilageText = new TextField();
		distanceInMilageText.setPrefHeight(40);
		gridPane.add(distanceInMilageText, 1, 1);

		String fueltype[] = { "petrol", "diesel" };
		Label combo_box1 = new Label("fuel type : ");
		gridPane.add(combo_box1, 0, 2);
		ComboBox fuelTypeComboBox = new ComboBox(FXCollections.observableArrayList(fueltype));
		TilePane tile_pane = new TilePane(fuelTypeComboBox);
		gridPane.add(fuelTypeComboBox, 1, 2);

		// Add Email Label
		Label costoffuel = new Label("costoffuel : ");
		gridPane.add(costoffuel, 0, 3);
		// Add Email Text Field
		TextField costPerLitterText = new TextField();
		costPerLitterText.setText(String.valueOf(fuelCostCalculationParams.getCostPerlitter()));
		costPerLitterText.setPrefHeight(40);
		gridPane.add(costPerLitterText, 1, 3);

		// Add Password Label
		Label milageofcar = new Label("milage of car : ");
		gridPane.add(milageofcar, 0, 4);

		// Add Password Field
		TextField milageOfCarText = new TextField();
		milageOfCarText.setPrefHeight(40);
		gridPane.add(milageOfCarText, 1, 4);
		Label totalCostLabel = new Label("Total cost : ");
		gridPane.add(totalCostLabel, 0, 5);

		// Add Name Text Field
		TextField totalCostLabelText = new TextField();
		totalCostLabelText.setPrefHeight(40);
		gridPane.add(totalCostLabelText, 1, 5);


		// Add Submit Button
		Button submitButton = new Button("Calculate Cost");
		submitButton.setPrefHeight(40);
		submitButton.setDefaultButton(true);
		submitButton.setPrefWidth(100);
		gridPane.add(submitButton, 0, 8, 2, 2);
		GridPane.setHalignment(submitButton, HPos.CENTER);
		GridPane.setMargin(submitButton, new Insets(20, 0, 20, 0));
		Button buttonRestart = new Button("Reset");
		buttonRestart.setPrefHeight(40);
		buttonRestart.setDefaultButton(true);
		buttonRestart.setPrefWidth(100);
		gridPane.add(buttonRestart, 0, 8, 24, 2);
		GridPane.setHalignment(buttonRestart, HPos.CENTER);
		GridPane.setMargin(buttonRestart, new Insets(20, 0, 20, 0));
		buttonRestart.setOnAction((ActionEvent event) -> {
			(((Node) event.getSource())).getScene().getWindow();
			distanceInMilageText.clear();
			milageOfCarText.clear();
			totalCostLabelText.clear();
			costPerLitterText.clear();
			fuelTypeComboBox.getSelectionModel().clearSelection();
		});
		
		submitButton.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent event) {
				if (distanceInMilageText.getText().isEmpty()) {
					showAlert(Alert.AlertType.ERROR, gridPane.getScene().getWindow(), "Form Error!",
							"Please enter details in distance");
					return;
				}
				if (costPerLitterText.getText().isEmpty()) {
					showAlert(Alert.AlertType.ERROR, gridPane.getScene().getWindow(), "Form Error!",
							"Please enter details in cost ");
					return;
				}
				if (milageOfCarText.getText().isEmpty()) {
					showAlert(Alert.AlertType.ERROR, gridPane.getScene().getWindow(), "Form Error!",
							"Please enter details in milage");
					return;
				}
				//System.out.println("selected index "+fuelTypeComboBox.getSelectionModel().getSelectedIndex());
				if (fuelTypeComboBox.getSelectionModel().getSelectedIndex() <= -1) {
				
					showAlert(Alert.AlertType.ERROR, gridPane.getScene().getWindow(), "Form Error!",
							"Please select type");
					return;
				} else {
					
					//System.out.println("selected fuel type "+fuelTypeComboBox.getPromptText());
					if (fuelTypeComboBox.getPromptText() == "Petrol") {
						fuelCostCalculationParams.setDiscountofFuel(0.25);
						//Label Discount = new Label("Discount for petrol is 0.25");
						
						//gridPane.add(Discount,0,7);

					} else if(fuelTypeComboBox.getPromptText() == "diesel")
					{
						fuelCostCalculationParams.setDiscountofFuel(0.20);
						//Label Discount = new Label("Discount for diesel is 0.20");

						//gridPane.add(Discount,0,7);
					}
				}

				fuelCostCalculationParams.setDistanceInMiles(Double.parseDouble(distanceInMilageText.getText()));
				fuelCostCalculationParams.setMilageOfCar(Double.parseDouble(milageOfCarText.getText()));
				fuelCostCalculationParams.setCostPerlitter(Double.parseDouble(costPerLitterText.getText()));
				double totalFuelCost = (fuelCostCalculationParams.getDistanceInMiles()
						/ fuelCostCalculationParams.getMilageOfCar())
						* (fuelCostCalculationParams.getCostPerlitter()
								- fuelCostCalculationParams.getDiscountofFuel());

				fuelCostCalculationParams.setTotalFuelCost(totalFuelCost);
				totalCostLabelText.setText(String.valueOf(totalFuelCost));

				fuelCalculationFileWriter.saveFuelCost(fuelCostCalculationParams, ConstantUtil.OUTPUT_FILE);

			}

		});
	}

	private void showAlert(Alert.AlertType alertType, Window owner, String title, String message) {
		Alert alert = new Alert(alertType);
		alert.setTitle(title);
		alert.setHeaderText(null);
		alert.setContentText(message);
		alert.initOwner(owner);
		alert.show();
	}

	public static void main(String[] args) {
		launch(args);
	}
}